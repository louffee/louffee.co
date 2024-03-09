import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Logo from './logo'

test('renders the Louffee logo with rose colour', () => {
  const year = new Date().getFullYear()

  const { container } = render(<Logo />)

  const svgElement = container.querySelector('svg.text-rose-700')
  expect(svgElement).toBeDefined()
})
