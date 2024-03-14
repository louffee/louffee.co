import Digits from './digits'
import Letters from './letters'

/**
 * The readonly array of strings with the characters for letters in both
 * uppercase and lowercase and digits from 0 to 9.
 */
const Alphanumeric = [...Letters, ...Digits] as const

export default Alphanumeric
