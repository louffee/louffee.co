import type { NextURL } from 'next/dist/server/web/next-url'
import { NextRequest, NextResponse as __NextResponse } from 'next/server'
import { describe, expect, test, vi, type MockedFunction } from 'vitest'

import detectLanguageMiddleware from './detect-language-middleware'

vi.mock('next/server', () => ({
  NextResponse: {
    redirect: vi.fn().mockImplementation((_nextURL: NextURL) => {}),
  },
}))

const redirectFn = __NextResponse.redirect as MockedFunction<typeof __NextResponse.redirect>

function mockNextRequest({
  acceptLanguage = 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
  pathname = '/page',
}: { acceptLanguage?: string | null; pathname?: string } = {}): NextRequest {
  const request = {
    url: 'http://localhost:3000/',
    nextUrl: {
      pathname,
      [Symbol.toPrimitive]() {
        return `http://localhost:3000${pathname}`
      },
      href: `http://localhost:3000${pathname}`,
    },
    headers: {
      get: vi.fn().mockReturnValue(acceptLanguage),
      forEach(callback: (value: string, key: string) => void) {
        const headers = {
          'accept-language': acceptLanguage,
        }

        for (const key in headers) {
          callback(headers[key], key)
        }
      },
    },
  } as unknown as NextRequest

  return request
}

describe('given a request with a pathname that contains a language', () => {
  describe('when the request has different language in the "accept-language" header', () => {
    test('then the user does NOT get redirected', () => {
      // Arrange
      const defaultLanguage = 'en'
      const languages = ['fr', 'en', 'pt']
      const request = mockNextRequest({
        acceptLanguage: 'fr;q=0.9',
        pathname: '/pt/page',
      })

      // Act
      detectLanguageMiddleware({
        defaultLanguage,
        languages,
      })(request)

      // Assert
      expect(redirectFn).not.toHaveBeenCalled()
    })
  })
})
