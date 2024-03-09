import { useState, type JSX } from 'react'

import { fireEvent, render } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import TextField from './text-field'

test('calls onInputChange() callback when value changes', () => {
  const onInputChange = vi.fn()
  const { getByRole } = render(<TextField onInputChange={onInputChange} />)
  const inputElement = getByRole('textbox')

  fireEvent.change(inputElement, { target: { value: 'Hello' } })

  expect(onInputChange).toHaveBeenCalledWith('Hello')
})

test('calls onInputChange() callback with the parsed value if the parse() function is provided', () => {
  const parse = vi.fn((value: string) => value.toLowerCase())
  const onInputChange = vi.fn()
  const { getByRole } = render(<TextField parse={parse} onInputChange={onInputChange} />)
  const inputElement = getByRole('textbox')

  fireEvent.change(inputElement, {
    target: {
      value: 'Hello',
    },
  })

  expect(parse).toHaveBeenCalledWith('Hello')
  expect(onInputChange).toHaveBeenCalledWith('hello')
})

test('renders the value returned by the format() function', () => {
  const format = vi.fn((value: string) => value.toUpperCase())

  const { container } = render(<TextField format={format} value="hello" />)
  const inputElement = container.querySelector('input')

  expect(inputElement).toHaveValue('HELLO')
})

test('calls the format() when the component re-renders after a value changes', () => {
  const format = vi.fn((value: string) => value.toUpperCase())
  function TestComponent(): JSX.Element {
    const [value, handleInputChange] = useState('')
    return <TextField format={format} value={value} onInputChange={handleInputChange} />
  }
  const { getByRole } = render(<TestComponent />)

  const inputElement = getByRole('textbox')
  fireEvent.change(inputElement, { target: { value: 'hello' } })

  expect(format).toHaveBeenCalledWith('hello')
})
