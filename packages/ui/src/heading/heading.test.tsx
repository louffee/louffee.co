import { createRef } from 'react'

import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Heading, { type HeadingVariant } from './heading'

test.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as HeadingVariant[])('renders the heading with the %s variant', (variant) => {
  const childText = 'Lorem ipsum'

  const { getByText } = render(<Heading variant={variant}>{childText}</Heading>)
  const headingElement = getByText(childText)

  expect(headingElement.tagName).toBe(variant.toUpperCase())
})

test('forwards the ref to the underlying HTML element', () => {
  const ref = createRef<HTMLHeadingElement>()
  const childText = 'Hello, world!'

  render(
    <Heading variant="h1" ref={ref}>
      {childText}
    </Heading>,
  )

  expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
})
