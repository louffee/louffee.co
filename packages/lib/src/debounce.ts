import rootGlobal from './_/root-global'
import isObject from './is-object'

export interface DebounceOptions {
  /**
   * Specify invoking on the leading edge of the timeout.
   */
  leading?: boolean
  /**
   * The maximum time `func` is allowed to be delayed before it's invoked.
   */
  maxWait?: number
  /**
   * Specify invoking on the trailing edge of the timeout.
   */
  trailing?: boolean
}

/**
 * This function checks a debounced function that delays invoking `func` until
 * after `wait` milliseconds have elapsed since the last time the debounced
 * function was invoked, or until the next browser frame is drawn. The debounced
 * function comes with a `cancel` method to cancel delayed `func` invocations
 * and a `flush` method to immediately invoke them. Provide `options` to
 * indicate whether `func` should be invoked on the leading and/or trailing edge
 * of the `wait` timeout. The `func` is invoked with the last arguments provided
 * to the debounced function. Subsequent calls to the debounced function return
 * the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @example
 * Avoid costly calculations while the window size is in flux:
 *
 * ```ts
 * const handleResize = debounce(calculateLayout, 150)
 * window.addEventListener('resize', handleResize)
 * ```
 *
 * @example
 * Invoke `sendMail` when clicked, debouncing subsequent calls:
 * ```tsx
 * const handleSendMail = debounce(sendMail, 300, { 'leading': true, 'trailing': false })
 * <button onClick={handleSendMail}>Send mail</button>
 * ```
 *
 * @example
 * Ensure `batchLog` is invoked once after 1 second of debounced calls:
 * ```ts
 * const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.onmessage = debounced
 * ```
 *
 * @example
 * Cancel the trailing debounced invocation:
 * ```ts
 * window.addEventListener('popstate', debounced.cancel)
 * ```
 *
 * @example
 * Check for pending invocations:
 * ```ts
 * const status = debounced.pending() ? "Pending..." : "Ready"
 * ```
 */
// NOTE: Unfortunately, we cannot foresee the shape of the func arguments.
// biome-ignore lint/suspicious/noExplicitAny: Read above ^^
function debounce<E, T extends (...args: any) => E>(
  func: T,
  waitInterval: number,
  options?: DebounceOptions,
): T & {
  cancel: () => void
  flush: () => E
  pending: () => boolean
} {
  let wait = waitInterval

  // NOTE: Unfortunately, we cannot foresee the shape of these arguments.
  // biome-ignore lint/suspicious/noExplicitAny: Read above ^^
  let lastArgs: any
  let lastThis: unknown
  let maxWait: number
  let result: E
  let timerId: ReturnType<typeof setTimeout> | undefined
  let lastCallTime: number | undefined
  let lastInvokeTime = 0
  let leading = false
  let maxing = false
  let trailing = true

  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
  const useRAF = !wait && wait !== 0 && typeof rootGlobal.requestAnimationFrame === 'function'

  if (typeof func !== 'function') {
    throw new TypeError(`Expected a function. Please see your implementation of debounce(${func}, ${wait}, ${options}) function.`)
  }
  wait = +wait || 0
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing
      ? Math.max(options?.maxWait ? +options.maxWait : 0, wait)
      : // NOTE: TypeScript is (correctly) saying that maxWait is being used
        //       before assigned. However, Lodash works with this code, so I
        //       will preserve it as is.
        // @ts-expect-error
        maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  function invokeFunc(time: number) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function startTimer(pendingFunc: typeof func, milliseconds: number) {
    if (useRAF) {
      rootGlobal.cancelAnimationFrame(timerId as unknown as number)
      return rootGlobal.requestAnimationFrame(pendingFunc)
    }
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return setTimeout(pendingFunc, milliseconds)
  }

  function cancelTimer(id: number) {
    if (useRAF) {
      rootGlobal.cancelAnimationFrame(id)
      return
    }
    clearTimeout(id)
  }

  function leadingEdge(time: number) {
    // NOTE: Reset any `maxWait` timer.
    lastInvokeTime = time
    // NOTE: Start the timer for the trailing edge.
    timerId = startTimer(timerExpired as T, wait) as ReturnType<typeof setTimeout>
    // NOTE: Invoke the leading edge.
    return leading ? invokeFunc(time) : result
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime ?? 0)
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime ?? 0)
    const timeSinceLastInvoke = time - lastInvokeTime

    // NOTE: Either this is the first call, activity has stopped and we're at
    //       the trailing edge, the system time has gone backwards and we're
    //       treating it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && timeSinceLastInvoke >= maxWait)
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // NOTE: Restart the timer.
    timerId = startTimer(timerExpired as T, remainingWait(time)) as ReturnType<typeof setTimeout>
    return undefined
  }

  function trailingEdge(time: number) {
    timerId = undefined

    // NOTE: Only invoke if we have `lastArgs` which means `func` has been
    //       debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel() {
    if (timerId !== undefined) {
      // NOTE: Workaround for passing the NodeJS/Browser `setTimeout` return
      //       value type overlapping.
      cancelTimer(timerId as unknown as number)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  /**
   * This closure function immediately invokes the debounced function and return
   * its result.
   */
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

  /**
   * This closure function checks if the debounced function is currently pending
   * its invocation.
   */
  function pending() {
    return timerId !== undefined
  }

  /**
   * This closure function is the debounced function. It delays invoking `func`
   * until after `wait` milliseconds have elapsed since the last time the
   * debounced function was invoked, or until the next browser frame is drawn.
   */
  function debounced_(...args: Parameters<typeof func>): E {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    // NOTE: "'this' implicitly has type 'any' because it does not have a type
    //       annotation.ts(2683)" is being thrown by TypeScript. However, this
    //       is a Lodash pattern, so I will preserve it as is.
    // @ts-expect-error
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired as T, wait) as ReturnType<typeof setTimeout>
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired as T, wait) as ReturnType<typeof setTimeout>
    }
    return result
  }

  // NOTE: Overlapping the debounced_ function with the original function to
  //       avoid misleading type inference.
  const debounced = debounced_ as T & {
    cancel: () => void
    flush: () => E
    pending: () => boolean
  }

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending

  return debounced
}

export default debounce
