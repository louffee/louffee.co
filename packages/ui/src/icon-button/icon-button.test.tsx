import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import IconButton from './icon-button'

test('renders the icon button with the provided icon', () => {
  const { getByRole } = render(<IconButton aria-label="Lorem Ipsum" icon="GitHubLogo" />)

  const button = getByRole('button')

  expect(button).toBeTruthy()
})

test('renders the icon button with the provided children', () => {
  const { getByRole } = render(
    <IconButton aria-label="Lorem Ipsum">
      <i>Icon</i>
    </IconButton>,
  )

  const button = getByRole('button')

  expect(button).toBeTruthy()
})
