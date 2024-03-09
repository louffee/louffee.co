import hasPathnameLanguage from './has-pathname-language'

/**
 * The `hasPathnameAnyLanguage()` function checks whether the pathname has any
 * of the provided languages. Under the hood, it uses the
 * `hasPathnameLanguage()` to evaluate the pathname in comparison to each
 * locale.
 *
 * @example
 * ```
 * hasPathnameAnyLanguage('/en-US/products', ['en-US', 'en-CA']) // true
 * hasPathnameAnyLanguage('/en-CA', ['en-US', 'en-CA']) // true
 * hasPathnameAnyLanguage('/en', ['en', 'en-CA']) // true
 * hasPathnameAnyLanguage('/products', ['en-GB', 'en-CA']) // false
 * ```
 */
function hasPathnameAnyLanguage(pathname: string, locales: string[]): boolean {
  return locales.some((locale) => hasPathnameLanguage(pathname, locale))
}

export default hasPathnameAnyLanguage
