import { ReactNode } from 'react'

import { render } from '@testing-library/react'
import Link from 'next/link'
import { expect, test, vi } from 'vitest'

import FooterNavigation from './footer-navigation'

vi.mock('next/link', () => ({
  default: vi.fn().mockImplementation(({ children }: { children: ReactNode }) => children),
}))

test('renders children', () => {
  const linkLabel = 'Link 1'
  const { getByText } = render(
    <FooterNavigation>
      <Link href="#">{linkLabel}</Link>
    </FooterNavigation>,
  )

  const anchorElement = getByText(linkLabel)

  expect(anchorElement).toBeDefined()
})
