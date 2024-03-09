import { cookies as __cookies } from 'next/headers'
import { MockedFunction, expect, test, vi } from 'vitest'

import constants from './constants'
import setLanguage from './set-language'

/**
 * The let in which the mocked version of the `cookies().set` function is stored
 * for testing usage.
 */
let cookieSetFn: MockedFunction<ReturnType<typeof __cookies>['set']>

vi.mock('next/headers', () => ({
  /**
   * The unnamed function is the mocked version of the `cookies()` function from
   * the `next/headers` module. To avoid errors and/or reference shadowing in
   * the test, we've renamed the original function to `__cookies`.
   *
   * @see https://nextjs.org/docs/app/api-reference/functions/cookies
   */
  cookies() {
    const setFn = vi.fn()
    cookieSetFn = setFn
    return {
      set: setFn,
    }
  },
}))

test('sets the cookie indexed by LANGUAGE_COOKIE_NAME with the given language', () => {
  const language = 'en'
  const cookieName = constants.LANGUAGE_COOKIE_NAME

  setLanguage(language)

  expect(cookieSetFn).toHaveBeenCalledWith(cookieName, language)
})
