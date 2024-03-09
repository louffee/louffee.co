import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import Image from './image'

vi.mock('next/image', () => ({
  default: vi.fn(),
}))

describe('given that an asset is loaded onto the page', () => {
  describe('when the image is rendered', () => {
    describe('and the alt text is NOT provided', () => {
      test('then log an error to the console', () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
        const imageSource = '/path/to/image.jpg'

        // @ts-expect-error NOTE: We are testing the error message
        render(<Image src={imageSource} width={18} height={18} />)

        expect(consoleError).toHaveBeenCalledWith(
          `The source of the image must have an alt attribute. Please review the <Image src=\"${imageSource}\" alt=\"\" /> and provide an alt attribute for the image.`,
        )

        consoleError.mockRestore()
      })
    })
  })
})
