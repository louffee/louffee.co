import SpecialCharacters from './constants/special-characters'

/**
 * The `hasAnySpecialCharacter()` function is a util used to check if a string
 * contains any special character.
 *
 * The special characters are defined in the `SpecialCharacters` constant that
 * can be found {@link SpecialCharacters | here}.
 *
 * @example
 * ```ts
 * hasAnySpecialCharacter('Hello, World!') // true
 * hasAnySpecialCharacter('Hello World')  // false
 * ```
 *
 * @see {@link SpecialCharacters}
 */
function hasAnySpecialCharacter(value: string): boolean {
  return SpecialCharacters.some((char) => value.includes(char))
}

export default hasAnySpecialCharacter
