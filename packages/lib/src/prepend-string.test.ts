import { expect, test } from 'vitest'

import prependString from './prepend-string'

test('prepends a string to another string', () => {
  const prefix = '/'
  const value = 'pathname'

  const result = prependString(prefix, value)

  expect(result).toBe('/pathname')
})

test('returns the string value as is if it already starts with the prefix', () => {
  const prefix = '£'
  const value = '£ 100,000'

  const result = prependString(prefix, value)

  expect(result).toBe('£ 100,000')
})
