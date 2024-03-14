import { NextResponse, type NextRequest } from 'next/server'

import constants from './constants'
import hasPathnameAnyLanguage from './has-pathname-any-language'
import matchLanguage, { type MatchLanguageOptions } from './match-language'
import shouldIgnorePath from './should-ignore-path'

// NOTE: This file is based on the example provided by Next.js' official
//       documentation. For further details, please consult the reference:
//       https://nextjs.org/docs/app/building-your-application/routing/internationalization#routing-overview

export interface DetectLanguageMiddlewareOptions extends MatchLanguageOptions {
  /**
   * The list of paths to be ignored by the middleware. The middleware will not
   * redirect the user to the correct language if the `pathname` starts with any
   * of the paths in the `ignoredPaths` array.
   */
  ignoredPaths?: string[]
}

/**
 * Detects the language from the request and redirects to the correct language
 * if the language is not set.
 *
 * If the language is not set, it will redirect to the `default` language. The
 * language is defined in the `NEXT_language` cookie and the user is redirected
 * to the correct language in the pathname, for example, `/en/...`.
 *
 * @example
 * ```ts
 * // File: src/middleware.ts
 * export default detectLanguageMiddleware({
 *   defaultLanguage: 'en',
 *   languages: ['en', 'pt'],
 * })
 * ```
 */
function detectLanguageMiddleware({ defaultLanguage, languages, ignoredPaths }: DetectLanguageMiddlewareOptions) {
  return function detectLanguageMiddlewareClosure(request: NextRequest): NextResponse<unknown> | undefined {
    const { pathname } = request.nextUrl

    if (shouldIgnorePath(pathname, ignoredPaths)) {
      return
    }

    const isLanguageInPathname = hasPathnameAnyLanguage(pathname, languages)

    if (isLanguageInPathname) {
      return
    }

    const negotiatorHeaders: Record<string, string> = {}
    // NOTE: We have to pass an object because negotiator will throw an error if
    //       it receives an undefined value or a Headers instance. Also, the key
    //       of the object must be "accept-language" (case sensitive). For
    //       reference, see:
    //       https://github.com/jshttp/negotiator/blob/master/index.js#L62C1-L63C1
    request.headers.forEach((value, key) => {
      negotiatorHeaders[key] = value
    })

    const isPathnameMissingLocale = !hasPathnameAnyLanguage(pathname, languages)

    if (isPathnameMissingLocale) {
      const locale = matchLanguage(negotiatorHeaders, { defaultLanguage, languages })

      const slashAfterLocale = `${pathname.startsWith('/') ? '' : '/'}`
      const searchParams = request.nextUrl.searchParams?.length ? `?${request.nextUrl.searchParams}` : ''

      const redirectPath = `${locale}${slashAfterLocale}${pathname}${searchParams}`
      const redirectBase = request.url

      const href = `${redirectBase}${redirectPath}`

      const response = NextResponse.next()
      response.cookies.set(constants.LANGUAGE_COOKIE_NAME, locale)

      return NextResponse.rewrite(href, response)
    }

    const response = NextResponse.next()
    response.cookies.set(constants.LANGUAGE_COOKIE_NAME, defaultLanguage)
    return response
  }
}

export default detectLanguageMiddleware
