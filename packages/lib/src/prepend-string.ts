/**
 * The `prependString()` function prepends a string to another string. The
 * prefix is added to the beginning of the string value.
 *
 * If the string value already starts with the prefix, the string value is
 * returned as is.
 *
 * @example
 * ```ts
 * prependString('/', 'pathname') // '/pathname'
 * prependString('/', '/pathname') // '/pathname'
 * ```
 */
function prependString(prefix: string, value: string): string {
  const coercedStringValue = `${value.startsWith(prefix) ? '' : prefix}`

  return `${coercedStringValue}${value}`
}

export default prependString
