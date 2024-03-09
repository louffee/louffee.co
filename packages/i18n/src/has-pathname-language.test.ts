import { expect, test } from 'vitest'

import hasPathnameLanguage from './has-pathname-language'

test('hasPathnameLocale should return true when the pathname has the specified language', () => {
  const pathname = '/en/products'
  const locale = 'en'

  const result = hasPathnameLanguage(pathname, locale)

  expect(result).toBe(true)
})

test('hasPathnameLocale should return false when the pathname does NOT have the specified language', () => {
  const pathname = '/products'
  const locale = 'en-GB'

  const result = hasPathnameLanguage(pathname, locale)

  expect(result).toBe(false)
})
