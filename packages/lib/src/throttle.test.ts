import { afterEach, beforeEach, expect, test, vi, type Mock } from 'vitest'

import throttle from './throttle'

let mockFn: Mock
let throttledFn: ReturnType<typeof throttle>

beforeEach(() => {
  mockFn = vi.fn()
  throttledFn = throttle(mockFn, 100)
})

afterEach(() => {
  vi.clearAllMocks()
})

test('should invoke the function immediately on the leading edge', () => {
  throttledFn()
  expect(mockFn).toHaveBeenCalledTimes(1)
})

test('should not invoke the function again within the specified wait time', () => {
  throttledFn()
  throttledFn()
  throttledFn()
  expect(mockFn).toHaveBeenCalledTimes(1)
})

test('should invoke the function again after the wait time has passed', async () => {
  throttledFn()
  expect(mockFn).toHaveBeenCalledTimes(1)

  await new Promise((resolve) => setTimeout(resolve, 200))

  throttledFn()
  expect(mockFn).toHaveBeenCalledTimes(2)
})

test('should invoke the function on the trailing edge if invoked multiple times within the wait time', async () => {
  throttledFn()
  throttledFn()
  throttledFn()
  expect(mockFn).toHaveBeenCalledTimes(1)

  await new Promise((resolve) => setTimeout(resolve, 200))

  expect(mockFn).toHaveBeenCalledTimes(2)
})

test.skip('should cancel the delayed invocation', async () => {
  throttledFn()
  throttledFn.cancel()
  expect(mockFn).toHaveBeenCalledTimes(0)

  await new Promise((resolve) => setTimeout(resolve, 200))

  expect(mockFn).toHaveBeenCalledTimes(0)
})

test.skip('should immediately invoke the function when flush is called', () => {
  throttledFn()
  throttledFn.flush()
  expect(mockFn).toHaveBeenCalledTimes(2)
})
