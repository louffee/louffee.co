import colors from 'colors'

const LOG_INFO_LEVEL_PREFIX = `${colors.blue('INFO')}` as const
const LOG_ERROR_LEVEL_PREFIX = `${colors.red('ERROR')}` as const
const LOG_WARNING_LEVEL_PREFIX = `${colors.yellow('WARN')}` as const
const LOG_DEBUG_LEVEL_PREFIX = `${colors.green('DEBUG')}` as const

/**
 * The `log` object is used to log messages to the console. It has four methods:
 * `log.info()`, `log.error()`, `log.warn()`, and `log.debug()`.
 */
const log = {
  /**
   * The `log.info()` function is used to log info messages to the console.
   *
   * @example
   * ```ts
   * log.info('This is an info message')
   * ```
   */
  info(...message: string[]): void {
    console.log(`${LOG_INFO_LEVEL_PREFIX} ${message.join('')}`)
  },
  /**
   * The `log.error()` function is used to log error messages to the console.
   *
   * @example
   * ```ts
   * log.error('This is an error message')
   * ```
   */
  error(...message: string[]): void {
    console.log(`${LOG_ERROR_LEVEL_PREFIX} ${message.join('')}`)
  },
  /**
   * The `log.warn()` function is used to log warning messages to the console.
   *
   * @example
   * ```ts
   * log.warn('This is a warning message')
   * ```
   */
  warn(...message: string[]): void {
    console.log(`${LOG_WARNING_LEVEL_PREFIX} ${message.join('')}`)
  },
  /**
   * The `log.debug()` function is used to log debug messages to the console.
   *
   * @example
   * ```ts
   * log.info('This is a debug message')
   * ```
   */
  debug(...message: string[]): void {
    console.log(`${LOG_DEBUG_LEVEL_PREFIX} ${message.join('')}`)
  },
}

export default log
