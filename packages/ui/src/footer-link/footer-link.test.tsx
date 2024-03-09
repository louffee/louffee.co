import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import FooterLink from './footer-link'

test('renders the HTML anchor element with the given href', () => {
  const href = '#'

  const { container } = render(<FooterLink href={href}>About</FooterLink>)

  const anchorElement = container.querySelector(`a[href="${href}"]`)
  expect(anchorElement).toBeDefined()
})

test('renders the HTML anchor element with the provided className', () => {
  const className = 'custom-class'

  const { container } = render(
    <FooterLink href="#" className={className}>
      About
    </FooterLink>,
  )
  const anchorElement = container.querySelector(`a.${className}`)

  expect(anchorElement).toBeDefined()
})
