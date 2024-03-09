import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import TopBarButton from './top-bar-button'

test('renders the anchor element with the href attribute', () => {
  const { container } = render(<TopBarButton href="/about">About</TopBarButton>)

  const buttonElement = container.querySelector('a[href="/about"]')

  expect(buttonElement).toBeDefined()
})
