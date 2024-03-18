import prependString from '@louffee/lib/prepend-string'
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
 * The `detectLanguageMiddleware()` creates a function which detects the
 * language from the request and redirects to the correct language if the
 * language is not set.
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
    for (const [key, value] of request.headers) {
      if (key.toLowerCase() === 'accept-language') {
        negotiatorHeaders[key] = value
      }
    }

    const isPathnameMissingLocale = !hasPathnameAnyLanguage(pathname, languages)

    if (isPathnameMissingLocale) {
      const locale = matchLanguage(negotiatorHeaders, { defaultLanguage, languages })

      const searchParams = request.nextUrl.searchParams?.length ? `?${request.nextUrl.searchParams}` : ''
      const pathnameWithSlash = prependString('/', pathname)

      const redirectPath = `${locale}${pathnameWithSlash}${searchParams}`
      const redirectBase = request.url

      const href = `${redirectBase}${redirectPath}`

      // NOTE: We have to set the language cookie here because the `redirect()`.
      //       So we create the NextResponse from the redirect() static method,
      //       inject the LANGUAGE_COOKIE_NAME and return the response, which
      //       Next.js interprets as the end of the middleware chain. See the
      //       official documentation on how to use the `redirect()` method:
      //       https://nextjs.org/docs/app/api-reference/functions/next-response#redirect
      const response = NextResponse.redirect(href)
      response.cookies.set(constants.LANGUAGE_COOKIE_NAME, locale)

      return response
    }

    const response = NextResponse.next()
    response.cookies.set(constants.LANGUAGE_COOKIE_NAME, defaultLanguage)
    return response
  }
}

export default detectLanguageMiddleware
