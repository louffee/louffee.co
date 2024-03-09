/**
 * The `importTranslation()` function is a helper function that allows you to
 * import a translation file dynamically.
 *
 * @example
 * ```ts
 * const en = await importTranslation<Translation>('./en.json')
 * ```
 */
async function importTranslation<T, U>(path: string): Promise<T> {
  return (await import(path)).default as T
}

export default importTranslation
