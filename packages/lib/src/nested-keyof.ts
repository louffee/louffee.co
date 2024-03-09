/**
 * The `NestedKeyof` type is a utility type that returns a union of all the keys
 * of an object and its nested objects. This is useful for type-checking nested
 * object keys in a type-safe way.
 *
 * @example
 * ```ts
 * type Example = {
 *   a: string
 *   b: {
 *     c: number
 *   }
 *   d: {
 *     e: boolean
 *   }
 * }
 *
 * type ExampleKeys = NestedKeyof<Example> // 'a' | 'b' | 'c' | 'd' | 'e'
 * ```
 */
type NestedKeyof<T> =
  | (T extends object ? keyof T : never)
  | {
      [TNestedKey in keyof T]: T[TNestedKey] extends object ? T[TNestedKey] : never
    }[keyof T]

export default NestedKeyof
