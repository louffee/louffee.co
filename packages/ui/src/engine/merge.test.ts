import { expect, test } from 'vitest'

import merge from './merge'

test('combines multiple class names into a single string', () => {
  const className = merge('text-red-500', 'bg-blue-500', 'p-4')
  expect(className).toBe('text-red-500 bg-blue-500 p-4')
})

test('does not append empty inputs', () => {
  const className = merge()
  expect(className).toBe('')
})

test('does not append null and undefined inputs', () => {
  const className = merge(null, undefined)
  expect(className).toBe('')
})

test('concatenates arrays of class names', () => {
  const className = merge(['text-red-500', 'bg-blue-500'], ['p-4'])
  expect(className).toBe('text-red-500 bg-blue-500 p-4')
})
