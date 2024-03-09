import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export interface MatchLanguageOptions {
  /**
   * The list of supported locales.
   *
   * @example ['en-US', 'pt-BR']
   */
  languages: string[]
  /**
   * The default locale to use if the locale is not set.
   *
   * @example 'en-US'
   */
  defaultLanguage: string
}

/**
 * The `matchLanguage()` function detects the language from the request and
 * returns the correct locale.
 *
 * @example
 * ```ts
 * const language = matchLanguage(request.headers, {
 *   languages: ['en-US', 'pt-BR'],
 *   defaultLanguage: 'en-US',
 * })
 * ```
 */
function matchLanguage(
  headers: Record<string, string | string[] | undefined>,
  { languages, defaultLanguage }: MatchLanguageOptions,
): string {
  if (!headers['accept-language']) {
    return defaultLanguage
  }

  const languagesFromHeader = new Negotiator({ headers }).languages()
  const locale = matchLocale(languagesFromHeader, languages, defaultLanguage, {
    algorithm: 'best fit',
  })

  return locale
}

export default matchLanguage
