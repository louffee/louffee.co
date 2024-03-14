import { expect, test } from 'vitest'

import parseFormData from './parse-form-data'

test('parses FormData object into a plain JavaScript object', () => {
  const formData = new FormData()
  formData.append('name', 'John Doe')
  formData.append('age', '25')

  const formValues = parseFormData(formData)

  expect(formValues).toEqual({ name: 'John Doe', age: '25' })
})

test('handles empty FormData object', () => {
  const formData = new FormData()

  const formValues = parseFormData(formData)

  expect(formValues).toEqual({})
})

test('handles FormData object with the latest set value', () => {
  const formData = new FormData()
  formData.append('color', 'red')
  formData.append('color', 'blue')
  formData.append('color', 'green')

  const formValues = parseFormData(formData)

  expect(formValues).toEqual({ color: 'green' })
})
