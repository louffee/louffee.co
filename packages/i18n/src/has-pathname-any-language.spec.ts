import { describe, expect, test } from 'vitest'

import hasPathnameAnyLanguage from './has-pathname-any-language'

describe('given that the user is on the /en-CA/products page', () => {
  describe('when the user has the "en" and "en-CA" languages', () => {
    test('then the language matches the "en-CA" language', () => {
      const pathname = '/en/products'
      const languages = ['en', 'en-CA']

      const result = hasPathnameAnyLanguage(pathname, languages)

      expect(result).toBe(true)
    })
  })
  describe('when the user has the "en-US" and "en-GB" languages', () => {
    test('then the language does NOT match', () => {
      const pathname = '/en-CA/products'
      const languages = ['en-US', 'en-GB']

      const result = hasPathnameAnyLanguage(pathname, languages)

      expect(result).toBe(false)
    })
  })
})
