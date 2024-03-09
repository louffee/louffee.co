import { render } from '@testing-library/react'

import { expect, test } from 'vitest'
import Copyright from './copyright'

test('renders the copyright notice', () => {
  const year = new Date().getFullYear()
  const text = `©️ Acme Inc. ${year}. All rights reserved.`

  const { getByText } = render(<Copyright>{text}</Copyright>)

  const copyrightElement = getByText(text)
  expect(copyrightElement).toBeDefined()
})
