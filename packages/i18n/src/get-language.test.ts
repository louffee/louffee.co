import { MockedFunction, expect, test, vi } from 'vitest'

import { cookies as __cookies } from 'next/headers'

import constants from './constants'
import getLanguage from './get-language'

vi.mock('next/headers', () => ({
  cookies() {
    return {
      get: vi.fn().mockReturnValue({ value: '__LANGUAGE_CODE__', name: constants.LANGUAGE_COOKIE_NAME }),
    }
  },
}))

/**
 * The `cookies()` function is the mocked version of the `cookies()` function
 * from the `next/headers` module. To avoid errors and/or reference shadowing in
 * the test, we've renamed the original function to `__cookies`.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/cookies
 */
function cookies(): {
  get: MockedFunction<ReturnType<typeof __cookies>['get']>
} {
  return {
    get: __cookies().get as MockedFunction<ReturnType<typeof __cookies>['get']>,
  }
}

const cookiesGetFn = cookies().get

test('returns the language code stored in the cookie indexed by LANGUAGE_COOKIE_NAME', () => {
  const expectedCookieValue = '__LANGUAGE_CODE__'
  cookiesGetFn.mockReturnValueOnce({
    value: expectedCookieValue,
    name: '',
  })

  const cookieValue = getLanguage()

  expect(cookieValue).toBe(expectedCookieValue)
})
