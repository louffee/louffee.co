import { expect, test } from 'vitest'

import isObject from './is-object'

test('should return true for an empty object', () => {
  const value = {}

  const result = isObject(value)

  expect(result).toBe(true)
})

test('should return false for an array', () => {
  const value = [] as unknown

  const result = isObject(value)

  expect(result).toBe(false)
})

test('should return false for null', () => {
  const value = null

  const result = isObject(value)

  expect(result).toBe(false)
})

test('should return true for a non-empty object', () => {
  const value = {
    name: 'John',
    age: 30,
  }

  const result = isObject(value)

  expect(result).toBe(true)
})

test('should return true for an object with nested properties', () => {
  const value = {
    person: {
      name: 'John',
      age: 30,
    },
  }

  const result = isObject(value)

  expect(result).toBe(true)
})

test('should return false for a string', () => {
  const value = 'Hello, World!'

  const result = isObject(value)

  expect(result).toBe(false)
})

test('should return false for a number', () => {
  const value = 42

  const result = isObject(value)

  expect(result).toBe(false)
})

test('should return false for a boolean', () => {
  const value = true

  const result = isObject(value)

  expect(result).toBe(false)
})
