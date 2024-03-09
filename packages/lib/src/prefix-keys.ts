/**
 * Prefixes all keys of an object with a string literal.
 *
 * @template P - The prefix to add to the keys.
 * @template U - The object to prefix the keys of.
 *
 * @example
 * ```ts
 * type Prefixed = PrefixKeys<'bar-', { foo: string }> // { 'bar-foo': string }
 * ```
 */
type PrefixKeys<P extends string, U extends { [key: string | number]: unknown }> = {
  // @ts-expect-error Unsure why the error is occurring.
  [K in keyof U as `${P}${K}`]: U[K]
}

export default PrefixKeys
