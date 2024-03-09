import { cookies } from 'next/headers'

import constants from './constants'

/**
 * The `setLanguage()` function sets the language code in the cookie indexed by
 * the {@link constants.LANGUAGE_COOKIE_NAME | `LANGUAGE_COOKIE_NAME`} constant.
 *
 * @example
 * ```ts
 * setLanguage('en')
 * ```
 *
 * @see {@link constants.LANGUAGE_COOKIE_NAME | `LANGUAGE_COOKIE_NAME`}
 */
function setLanguage<V extends string>(language: V) {
  cookies().set(constants.LANGUAGE_COOKIE_NAME, language)
}

export default setLanguage
