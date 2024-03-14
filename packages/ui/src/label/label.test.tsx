import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Label from './label'

test('renders the label text', () => {
  const labelText = 'Lorem ipsum'
  const { getByText } = render(<Label>{labelText}</Label>)

  const labelElement = getByText(labelText)
  expect(labelElement).toBeInTheDocument()
})

test('applies the correct className', () => {
  const labelText = 'Lorem ipsum'
  const customClassName = 'custom-class'

  const { container } = render(<Label className={customClassName}>{labelText}</Label>)

  expect(container.firstChild).toHaveClass(customClassName)
})
