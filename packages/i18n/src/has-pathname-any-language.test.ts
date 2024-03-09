import { afterEach, expect, test, vi, type MockedFunction } from 'vitest'

import hasPathnameAnyLanguage from './has-pathname-any-language'
import __hasPathnameLanguage from './has-pathname-language'

vi.mock('./has-pathname-language', () => ({
  default: vi.fn().mockReturnValue(false),
}))

const hasPathnameLanguageFn = __hasPathnameLanguage as MockedFunction<typeof __hasPathnameLanguage>

afterEach(() => {
  hasPathnameLanguageFn.mockClear()
})

test('should call hasPathnameLanguage(pathname, language) for each unmatched language', () => {
  const pathname = '/en-CA/products'
  const languages = ['en-US', 'en-CA']

  hasPathnameAnyLanguage(pathname, languages)

  expect(hasPathnameLanguageFn).toHaveBeenCalledTimes(2)
  expect(hasPathnameLanguageFn).toHaveBeenCalledWith(pathname, 'en-US')
  expect(hasPathnameLanguageFn).toHaveBeenCalledWith(pathname, 'en-CA')
})

test('should call hasPathnameLanguage(pathname, language) X times until finding a match', () => {
  hasPathnameLanguageFn.mockReturnValueOnce(true)
  const pathname = '/en/products'
  const languages = ['en', 'en-GB']

  hasPathnameAnyLanguage(pathname, languages)

  expect(hasPathnameLanguageFn).toHaveBeenCalledTimes(1)
  expect(hasPathnameLanguageFn).toHaveBeenCalledWith(pathname, 'en')
})
