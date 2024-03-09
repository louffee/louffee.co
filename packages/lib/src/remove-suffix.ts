import type SuppressSuffix from './suppress-suffix'

/**
 * This function removes the given `suffix` from the value and returns the
 * result according to the {@link SuppressSuffix | `SuppressSuffix`}. If the
 * value does not end with the given `suffix`, the value is returned as is.
 *
 * @example
 * ```
 * removeSuffix('foo', 'bar') // 'foo'
 * removeSuffix('foobar', 'bar') // 'foo'
 * ```
 */
function removeSuffix<T extends string, S extends string>(value: T, suffix: S): SuppressSuffix<T, S> {
  if (value.endsWith(suffix)) {
    return value.slice(0, -suffix.length) as SuppressSuffix<T, S>
  }

  return value as SuppressSuffix<T, S>
}

export default removeSuffix
