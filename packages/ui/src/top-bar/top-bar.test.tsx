import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import TopBar from './top-bar'

test('renders the children inside the HTML header element', () => {
  const __CHILD_TEXT__ = 'Child 1'

  const { getByText } = render(<TopBar>{__CHILD_TEXT__}</TopBar>)

  const child = getByText(__CHILD_TEXT__)
  expect(child).toBeDefined()
})
