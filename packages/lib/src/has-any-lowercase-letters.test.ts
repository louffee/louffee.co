import { expect, test } from 'vitest'

import hasAnyLowercaseLetters from './has-any-lowercase-letters'

test('validates true if the string contains any lowercase letter at any position', () => {
  const value = 'Hello, World!'

  const hasLowercase = hasAnyLowercaseLetters(value)

  expect(hasLowercase).toBe(true)
})

test('validates false if the string does not contain any lowercase letter', () => {
  const value = 'HELLO, WORLD!'

  const hasLowercase = hasAnyLowercaseLetters(value)

  expect(hasLowercase).toBe(false)
})
