import CamelPrefix from './camel-prefix'
import type PrefixKeys from './prefix-keys'

/**
 * Prefixes all keys of an object with a string literal and camel cases the
 * resulting keys.
 *
 * @template P - The prefix to add to the keys.
 * @template U - The object to prefix the keys of.
 *
 * @example
 * ```ts
 * type Prefixed = CamelPrefixKeys<'bar', { foo: string }> // { barFoo: string }
 * ```
 */
type CamelPrefixKeys<P extends string, U extends { [key: string | number]: unknown }> = PrefixKeys<CamelPrefix<P, keyof U & string>, U>

export default CamelPrefixKeys
