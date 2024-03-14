import { expect, test } from 'vitest'

import hasAnyUppercaseLetters from './has-any-uppercase-letters'

test('validates true if the string contains any uppercase letter at any position', () => {
  const input = 'Hello, World!'

  const hasUppercase = hasAnyUppercaseLetters(input)

  expect(hasUppercase).toBe(true)
})

test('validates false if the string does not contain any uppercase letter', () => {
  const input = 'hello, world!'

  const hasUppercase = hasAnyUppercaseLetters(input)

  expect(hasUppercase).toBe(false)
})
