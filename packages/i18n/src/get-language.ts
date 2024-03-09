import { cookies } from 'next/headers'

import constants from './constants'

/**
 * The `getLanguage()` function returns the language code stored in the cookie
 * indexed by the {@link constants.LANGUAGE_COOKIE_NAME | `LANGUAGE_COOKIE_NAME`}
 * constant or `undefined` if the cookie is not set.
 *
 * @example
 * ```ts
 * const language = getLanguage()
 * ```
 *
 * @see {@link constants.LANGUAGE_COOKIE_NAME | `LANGUAGE_COOKIE_NAME`}
 */
function getLanguage<T extends string>(): T | undefined {
  const cookieValue = cookies().get(constants.LANGUAGE_COOKIE_NAME)?.value as T | undefined

  return cookieValue
}

export default getLanguage
