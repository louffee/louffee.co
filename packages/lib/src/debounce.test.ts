import { expect, test, vi } from 'vitest'

import debounce from './debounce'

test('should delay invoking the function', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn()
  const debouncedFn = debounce(mockFn, 100)

  debouncedFn()
  expect(mockFn).not.toBeCalled()

  vi.advanceTimersByTime(50)
  expect(mockFn).not.toBeCalled()

  vi.advanceTimersByTime(100)
  expect(mockFn).toBeCalledTimes(1)
})

test('should invoke the function immediately on leading edge', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn()
  const debouncedFn = debounce(mockFn, 100, { leading: true })

  debouncedFn()
  expect(mockFn).toBeCalledTimes(1)

  vi.advanceTimersByTime(50)
  debouncedFn()
  expect(mockFn).toBeCalledTimes(1)

  vi.advanceTimersByTime(100)
  expect(mockFn).toBeCalledTimes(2)
})

test('should invoke the function on trailing edge if called multiple times', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn()
  const debouncedFn = debounce(mockFn, 100, { trailing: true })

  debouncedFn()
  expect(mockFn).not.toBeCalled()

  vi.advanceTimersByTime(50)
  debouncedFn()
  expect(mockFn).not.toBeCalled()

  vi.advanceTimersByTime(100)
  expect(mockFn).toBeCalledTimes(1)
})

test('should cancel delayed invocations', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn()
  const debouncedFn = debounce(mockFn, 100)

  debouncedFn()
  expect(mockFn).not.toBeCalled()

  debouncedFn.cancel()
  vi.advanceTimersByTime(100)
  expect(mockFn).not.toBeCalled()
})

test('should immediately invoke the function on flush', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn()
  const debouncedFn = debounce(mockFn, 100)

  debouncedFn()
  expect(mockFn).not.toBeCalled()

  const result = debouncedFn.flush()
  expect(mockFn).toBeCalledTimes(1)
  expect(result).toBeUndefined()
})

test('should return the result of the last function invocation', () => {
  vi.useFakeTimers()

  const mockFn = vi.fn().mockReturnValue('result')
  const debouncedFn = debounce(mockFn, 100)

  const result1 = debouncedFn()
  expect(result1).toBeUndefined()

  vi.advanceTimersByTime(100)
  const result2 = debouncedFn()
  expect(result2).toBe('result')
})
