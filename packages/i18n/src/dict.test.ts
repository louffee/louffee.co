import { expect, test, vi } from 'vitest'

import dict from './dict'

vi.mock('./set-language', () => ({
  default: vi.fn(),
}))

const makeDictOptions = () => {
  const mockTranslations = {
    en: {
      Hello: 'Hello',
      Goodbye: 'Goodbye',
    },
    fr: {
      Hello: 'Bonjour',
      Goodbye: 'Au revoir',
    },
  }

  return {
    defaultLanguage: 'en',
    dictionary: {
      en: async () => mockTranslations.en,
      fr: async () => mockTranslations.fr,
    },
  }
}

test('returns translations for the given language', async () => {
  const dictOptions = makeDictOptions()

  const translations = await dict('fr', dictOptions)
  const translatedString = translations('Hello')

  expect(translatedString).toBe('Bonjour')
})

test('returns translations of the default language if the given language is not available', async () => {
  const dictOptions = makeDictOptions()

  const translations = await dict('pt', dictOptions)
  const translatedString = translations('Hello')

  expect(translatedString).toBe('Hello')
})

test('returns the key if the translation is available neither in the given language nor in the default language', async () => {
  const dictOptions = makeDictOptions()

  const translations = await dict('en', dictOptions)
  // @ts-expect-error We expect a TypeScript error here because the given key is
  //                  not available in the dictionaries.
  const translatedString = translations('This language is not in the provided dictionaries.')

  expect(translatedString).toBe('This language is not in the provided dictionaries.')
})
