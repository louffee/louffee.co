import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'

import Input from './input'

test('renders input element with the provided value', () => {
  const value = 'Lorem ipsum'

  const { container } = render(<Input type="text" value={value} readOnly={true} />)

  const inputElement = container.querySelector(`input[value="${value}"]`) as HTMLInputElement
  expect(inputElement).toBeDefined()
})

test('handles input value change', async () => {
  const handleChange = vi.fn()
  const inputValue = 'Lorem ipsum'
  const { container } = render(<Input type="text" onChange={handleChange} value="" />)

  const inputEl = container.querySelector('input') as HTMLInputElement
  await userEvent.type(inputEl, inputValue)

  expect(handleChange).toHaveBeenCalledTimes(inputValue.length)
})
