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
  'site.webmanifest',
] as const

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
function shouldIgnorePath(pathname: string, ignoredPaths: string[] = []): boolean {
  if (pathname.endsWith('.svg') || pathname.includes('/assets/')) {
    return true
  }

  const paths = [...DEFAULT_IGNORE_PATHS, ...ignoredPaths]

  return paths.some((ignoredPath) => pathname.startsWith(ignoredPath))
}

export default shouldIgnorePath
