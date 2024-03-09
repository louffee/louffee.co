import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Footer from './footer'

test('renders children', () => {
  const childText = 'Lorem ipsum'
  const { getByText } = render(<Footer>{childText}</Footer>)

  const footerElement = getByText(childText)

  expect(footerElement).toBeDefined()
})
