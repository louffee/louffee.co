import debounce from './debounce'
import isObject from './is-object'

export interface ThrottleOptions {
  /**
   * Specify invoking on the leading edge of the timeout.
   */
  leading?: boolean
  /**
   * Specify invoking on the trailing edge of the timeout.
   */
  trailing?: boolean
}

/**
 * The throttle function creates a throttled function that only invokes `func`
 * at most once per every `wait` milliseconds (or once per browser frame). The
 * throttled function comes with a `cancel` method to cancel delayed `func`
 * invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the throttled function. Subsequent calls to the
 * throttled function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the throttled function is invoked
 * more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `throttle` and `debounce`.
 *
 * @example
 * Avoid excessively updating the position while scrolling:
 * ```tsx
 * const handleScroll = throttle(updatePosition, 100)
 * window.addEventListener('scroll', handleScroll)
 * ```
 *
 * @example
 * Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes:
 * ```tsx
 * const onClick = throttle(renewToken, 300000, { 'trailing': false })
 * <button onClick={onClick}>Renew Token</button>
 * ```
 *
 * @example
 * Cancel the trailing throttled invocation:
 * ```tsx
 * <button onClick={throttledFunction.cancel}>Cancel</button>
 * ```
 */

// NOTE: Unfortunately, we cannot foresee the shape of the func arguments.
// biome-ignore lint/suspicious/noExplicitAny: Read above ^^
function throttle<E, T extends (...args: any[]) => E>(func: T, wait: number, options?: ThrottleOptions) {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError(`Expected a function. Please see your implementation of throttle(${func}, ${wait}, ${options}) function.`)
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  })
}

export default throttle
