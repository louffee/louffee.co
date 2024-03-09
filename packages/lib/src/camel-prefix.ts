/**
 * The `CamelPrefix` type is a utility type that takes two string literal types
 * and returns a new string literal type by prefixing the first string with the
 * capitalized second string.
 *
 * @example
 * ```ts
 * type T0 = CamelPrefix<'foo', 'bar'> // 'fooBar'
 * ```
 */
type CamelPrefix<P extends string, K extends string> = `${P}${Capitalize<string & K>}`

export default CamelPrefix
