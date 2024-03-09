import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import ViewportAxis from './viewport-axis'

test('renders in the top-center position', () => {
  const __TEXT__ = 'Lorem ipsum'

  const { container } = render(<ViewportAxis position="top-center">{__TEXT__}</ViewportAxis>)

  const viewportAxisElement = container.querySelector('.top-8')
  expect(viewportAxisElement).toBeDefined()
})

test('renders in the bottom-center position', () => {
  const __TEXT__ = 'Lorem ipsum'

  const { container } = render(<ViewportAxis position="bottom-center">{__TEXT__}</ViewportAxis>)

  const viewportAxisElement = container.querySelector('.bottom-8')
  expect(viewportAxisElement).toBeDefined()
})
