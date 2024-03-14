import UppercaseLetters from './constants/uppercase-letters'

/**
 * The `hasAnyUppercaseLetters()` function is a util used to check if a string
 * contains any uppercase letters.
 *
 * The uppercase letters are defined in the `UppercaseLetters` constant that
 * can be found {@link UppercaseLetters | here}.
 *
 * @example
 * ```ts
 * hasAnyUppercaseLetters('Hello, World!') // true
 * hasAnyUppercaseLetters('hello, world!') // false
 * ```
 */
function hasAnyUppercaseLetters(value: string): boolean {
  return UppercaseLetters.some((char) => value.includes(char))
}

export default hasAnyUppercaseLetters
