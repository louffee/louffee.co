/**
 * Type to prefix a string with another string.
 *
 * @template T - The string to prefix.
 * @template P - The prefix to add to the string.
 *
 * @example
 * ```ts
 * type Prefixed = Prefix<'foo', 'bar-'> // 'bar-foo'
 * ```
 */
type Prefix<T extends string, P extends string> = `${P}${T}`

export default Prefix
