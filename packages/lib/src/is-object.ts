/**
 * This function validates whether or not the given value is an object which
 * does not correspond to an array and is not null.
 *
 * @example
 * ```ts
 * isObject({}) // true
 * isObject([]) // false
 * isObject(null) // false
 * ```
 */
function isObject<T extends object = object>(value: unknown): value is T {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export default isObject
