import { expect, test } from 'vitest'

import hasAnySpecialCharacter from './has-any-special-character'

test('returns true if the string contains any special character', () => {
  const value = 'Hello, World!'

  const result = hasAnySpecialCharacter(value)

  expect(result).toBe(true)
})

test('returns false if the string does not contain any special character', () => {
  const value = 'Hello World'

  const result = hasAnySpecialCharacter(value)

  expect(result).toBe(false)
})
