import dayjs, { Dayjs, type FormatObject } from 'dayjs'

/**
 * The `date()` function creates a new instance of the `DateHandler` class,
 * which is a wrapper around the `dayjs` library.
 *
 * @see https://day.js.org
 * @see https://npmjs.com/package/dayjs
 */
const date = dayjs

/**
 * The `DateHandler` is the class representing the date handler which is the
 * product of the {@link date | `date()`} function.
 */
export const DateHandler = Dayjs

export type { FormatObject }

export default date
