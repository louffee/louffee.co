/**
 * @internal The list containing the paths to be ignored by default.
 */
const DEFAULT_IGNORE_PATHS = [
  '/api',
  '/_next',
  '/favicon',
  '/robots.txt',
  '/icon',
  '/mstile',
  '/browserconfig.xml',
  '/apple-touch-icon.png',
  '/android-chrome-',
  '/safari-pinned-tab.svg',
  '/site.webmanifest',
] as const

/**
 * @internal The list containing the extensions of the files to be ignored.
 */
const IGNORED_FILE_EXTENSIONS = ['.svg', '.png', '.ico', '.xml', '.webmanifest'] as const

/**
 * @internal The `isIgnoredFileExtension()` function checks if the `pathname` is
 *           an ignored file extension, returning the boolean-ish value.
 */
function isIgnoredFileExtension(pathname: string): boolean {
  return IGNORED_FILE_EXTENSIONS.some((extension) => pathname.endsWith(extension))
}

/**
 * @internal The list containing the folder names to be ignored.
 */
const IGNORED_FOLDER_NAMES = ['assets'] as const

/**
 * @internal The `isIgnoredFolderName()` function checks if the `pathname` is an
 *           ignored folder name, returning the boolean-ish value.
 */
function isIgnoredFolderName(pathname: string): boolean {
  return IGNORED_FOLDER_NAMES.some((folderName) => pathname.includes(`/${folderName}/`))
}

/**
 * The `shouldIgnorePath()` function checks if the `pathname` should be ignored
 * based on the `ignoredPaths` array and ignored paths by default, returning the
 * boolean-ish value.
 *
 * @example
 * ```ts
 * shouldIgnorePath('/_next/data/development/...', ['/_next', '/api']) // true
 * ```
 */
export default function shouldIgnorePath(pathname: string, ignoredPaths: string[] = []): boolean {
  if (isIgnoredFileExtension(pathname) || isIgnoredFolderName(pathname)) {
    return true
  }

  const paths = [...DEFAULT_IGNORE_PATHS, ...ignoredPaths]

  return paths.some((ignoredPath) => pathname.startsWith(ignoredPath))
}
