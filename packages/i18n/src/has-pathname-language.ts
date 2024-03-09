/**
 * The `hasPathnameLanguage()` function checks whether the pathname has a
 * language.
 *
 * @example
 * ```ts
 * hasPathnameLanguage('/en-US/products', 'en-US') // true
 * hasPathnameLanguage('/en-CA') // true
 * hasPathnameLanguage('/en') // true
 * hasPathnameLanguage('/products', 'en-US') // false
 * ```
 */
function hasPathnameLanguage(pathname: string, locale: string) {
  return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
}

export default hasPathnameLanguage
