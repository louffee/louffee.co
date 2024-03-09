import { createRef } from 'react'

import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Image from './image'

test('renders with an alt text', () => {
  const altText = 'Lorem ipsum'
  const { getByAltText } = render(<Image src="/path/to/image.jpg" alt={altText} width={18} height={18} />)

  const imageElement = getByAltText(altText)

  expect(imageElement).toBeDefined()
})

test('forwards the reference which matches the image HTML element', () => {
  const ref = createRef<HTMLImageElement>()

  const { getByRole } = render(<Image src="/path/to/image.jpg" alt="Lorem ipsum" width={18} height={18} ref={ref} />)

  const imageElement = getByRole('img')
  expect(ref.current).toBe(imageElement)
})
