import { expect, test } from 'vitest'

import removeSuffix from './remove-suffix'

test('should remove the suffix from the value if it ends with the suffix', () => {
  expect(removeSuffix('foobar', 'bar')).toBe('foo')
  expect(removeSuffix('hello world', 'world')).toBe('hello ')
  expect(removeSuffix('abc123', '123')).toBe('abc')
})

test('should return the value as is if it does not end with the suffix', () => {
  expect(removeSuffix('foo', 'bar')).toBe('foo')
  expect(removeSuffix('hello', 'world')).toBe('hello')
  expect(removeSuffix('abc', '123')).toBe('abc')
})
