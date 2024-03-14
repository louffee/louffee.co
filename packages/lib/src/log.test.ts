import { vi } from 'vitest'

import log from './log'

const consoleLogFn = vi.spyOn(console, 'log').mockImplementation(() => {})

test('logs info messages', () => {
  const message = 'This is an info message'

  log.info(message)

  expect(consoleLogFn).toHaveBeenCalledWith(expect.stringContaining(message))
})

test('logs error messages', () => {
  const message = 'This is an error message'

  log.error(message)

  expect(consoleLogFn).toHaveBeenCalledWith(expect.stringContaining(message))
})

test('logs warning messages', () => {
  const message = 'This is a warning message'

  log.warn(message)

  expect(consoleLogFn).toHaveBeenCalledWith(expect.stringContaining(message))
})

test('logs debug messages', () => {
  const message = 'This is a debug message'

  log.debug(message)

  expect(consoleLogFn).toHaveBeenCalledWith(expect.stringContaining(message))
})
