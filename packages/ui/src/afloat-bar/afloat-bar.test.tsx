import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import AfloatBar from './afloat-bar'

test('renders children correctly', () => {
  const __TEXT__ = 'Child Component'

  const { getByText } = render(<AfloatBar>{__TEXT__}</AfloatBar>)

  const element = getByText(__TEXT__)
  expect(element).toBeDefined()
})

test('forwards properties to children when asChild is true', () => {
  const __FORWARDED_PROP__ = 'true'

  const { container } = render(
    <AfloatBar asChild={true} data-forwarded-prop={__FORWARDED_PROP__}>
      <header>__TEXT__</header>
    </AfloatBar>,
  )

  const element = container.querySelector(`header[data-forwarded-prop="${__FORWARDED_PROP__}"]`)
  expect(element).toBeDefined()
})
