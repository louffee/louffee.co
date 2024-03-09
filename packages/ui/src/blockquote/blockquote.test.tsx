import { render } from '@testing-library/react'

import { expect, test } from 'vitest'
import Blockquote from './blockquote'

test('renders the blockquote', () => {
  const testimonial =
    'The platform was so easy to use. I found a great apartment near my university, and the whole process was smooth and stress-free.'

  const { getByText } = render(<Blockquote>{testimonial}</Blockquote>)

  const blockquoteElement = getByText(testimonial)
  expect(blockquoteElement).toBeDefined()
})
