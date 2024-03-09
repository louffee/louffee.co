/**
 * The `SuppressSuffix` type suppresses the suffix `S` from the string `T`.
 *
 * @template T The string to suppress the suffix from.
 * @template S The suffix to suppress from the string `T`.
 *
 * @example
 * ```ts
 * type T0 = SuppressSuffix<'foobar', 'bar'> // 'foo'
 * ```
 */
type SuppressSuffix<T extends string, S extends string> = T extends `${infer U}${S}` ? U : T

export default SuppressSuffix
