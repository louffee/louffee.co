import LowercaseLetters from './lowercase-letters'
import UppercaseLetters from './uppercase-letters'

/**
 * The readonly array of strings with the possible characters which are the
 * letters of the latin alphabet in both lowercase and uppercase.
 */
const Letters = [...LowercaseLetters, ...UppercaseLetters] as const

export default Letters
