import { expect, test } from 'vitest'

import matchLanguage, { MatchLanguageOptions } from './match-language'

test('should return the default language when no headers are provided', () => {
  const headers = {
    'accept-language': '',
  }
  const options: MatchLanguageOptions = {
    languages: ['en-US', 'pt-BR'],
    defaultLanguage: 'en-US',
  }

  const language = matchLanguage(headers, options)

  expect(language).toBe(options.defaultLanguage)
})

test('should return the correct language when a supported language is provided in the headers', () => {
  const headers = {
    'accept-language': 'pt-BR',
  }
  const options: MatchLanguageOptions = {
    languages: ['en', 'en-US', 'pt-BR'],
    defaultLanguage: 'en',
  }

  const language = matchLanguage(headers, options)

  expect(language).toBe('pt-BR')
})

test('should return the default language when an unsupported language is provided in the headers', () => {
  const headers = {
    'accept-language': 'fr-FR',
  }
  const options: MatchLanguageOptions = {
    languages: ['en-US', 'pt-BR'],
    defaultLanguage: 'en-US',
  }

  const language = matchLanguage(headers, options)

  expect(language).toBe(options.defaultLanguage)
})
