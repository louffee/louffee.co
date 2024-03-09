import setLanguage from './set-language'

export interface DictOptions<T extends Record<string, string>, L extends string, U extends string> {
  /**
   * The default language of the dictionary.
   *
   * @example "en"
   */
  defaultLanguage: L
  /**
   * The dictionary prop which contains the provides the translations indexed by
   * the language code.
   *
   * @example
   * ```ts
   * {
   *   en: await import('./en.json').then((module) => module.default),
   * }
   * ```
   */
  dictionary: {
    [$ in U | L]: () => Promise<T>
  }
}

export interface DictTranslationFn<T extends Record<string, string>> {
  <K extends keyof T>(key: K): string & T[K]
}

/**
 * The `dict()` function works as a factory which orchestrates the dictionary
 * and returns the translations for the given language.
 *
 * @template T The type of the dictionary, which is a record of strings mapped
 *             to strings.
 * @template L The type of the language code, which is a string, *e.g.*, `"en"`.
 */
async function dict<T extends Record<string, string>, L extends string, U extends string>(
  language: L,
  { defaultLanguage, dictionary }: DictOptions<T, L, U>,
): Promise<DictTranslationFn<T>> {
  const loadDefaultDictMapFn = dictionary[defaultLanguage]
  const loadLanguageDictMapFn = dictionary[language]

  const hasLanguage = typeof loadLanguageDictMapFn === 'function'

  const defaultDictMap = await loadDefaultDictMapFn()
  const languageDictMap = hasLanguage ? await loadLanguageDictMapFn() : ({} as T)

  setLanguage(hasLanguage ? language : defaultLanguage)

  /**
   * The `t()` function returns the translation for the given key. If the key
   * is not found in the language dictionary, it will fallback to the default
   * dictionary. If the key is not found in the default dictionary, it will
   * fallback to the key itself.
   *
   * @example
   * ```ts
   * const t = await dict('pt', {
   *   defaultLanguage: 'en',
   *   dictionary: {
   *     en: () => import('./en.json').then((module) => module.default),
   *     pt: () => import('./pt.json').then((module) => module.default),
   *   },
   * })
   *
   * t('The easiest way for students to discover and book housing while studying abroad. Sign up to get notified when we launch.')
   * // "A maneira mais fácil para estudantes descobrirem e reservarem alojamento enquanto estudam no estrangeiro. Regista-te para seres notificado quando lançarmos."
   * ```
   */
  return function t<K extends keyof T>(key: K): string & T[K] {
    const translationFromDefaultDictMap = defaultDictMap[key]
    const translationFromLanguageDictMap = languageDictMap[key]

    const translatedKey = (translationFromLanguageDictMap || translationFromDefaultDictMap || key) as string & T[K]

    return translatedKey
  }
}

export default dict
