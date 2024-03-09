import { expect, test } from 'vitest'

import shouldIgnorePath from './should-ignore-path'

test.each(['/api', '/_next', '/favicon.ico', '/robots.txt'])('should return true for paths ignored by default: (%s)', (pathname) => {
  const emptyArray: string[] = []

  const result = shouldIgnorePath(pathname, emptyArray)

  expect(result).toBe(true)
})

test('should return true for ignored paths in the ignoredPaths array', () => {
  const ignoredPaths = ['/_next', 'api']
  const pathname = '/_next/data/development/...'

  const result = shouldIgnorePath(pathname, ignoredPaths)

  expect(result).toBe(true)
})

test('should return false for non-ignored paths', () => {
  const ignoredPaths = ['/home', '/about', '/contact']
  const pathname = '/dashboard'

  const result = shouldIgnorePath(pathname, ignoredPaths)

  expect(result).toBe(false)
})
