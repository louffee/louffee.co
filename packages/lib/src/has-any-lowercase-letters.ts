import LowercaseLetters from './constants/lowercase-letters'

/**
 * The `hasAnyLowercaseLetter()` function is a util used to check if a string
 * contains any lowercase letters.
 *
 * The lowercase letters are defined in the `LowercaseLetters` constant that
 * can be found {@link LowercaseLetters | here}.
 *
 * @example
 * ```ts
 * hasAnyLowercaseLetter('Hello, World!') // true
 * hasAnyLowercaseLetter('hello, world!') // false
 * ```
 */
function hasAnyLowercaseLetter(value: string): boolean {
  return LowercaseLetters.some((char) => value.includes(char))
}

export default hasAnyLowercaseLetter
