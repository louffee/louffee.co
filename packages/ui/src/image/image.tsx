'use client'

import { forwardRef } from 'react'

import Next$Image, { type ImageProps as Next$ImageProps } from 'next/image'

import merge from '../engine/merge'

/**
 * The image HTML element passed to the component as the reference.
 */
export type ImageForwardedReferenceType = HTMLImageElement

export interface ImageProps extends Next$ImageProps {}

/**
 * The image component is a wrapper around the next/image component. It provides
 * a consistent way to use images across the application.
 *
 * This component supports ref forwarding, which allows you to access the image
 * HTML element directly.
 *
 * @example
 * ```tsx
 * <Image src="/path/to/image.jpg" alt="Image description" />
 * ```
 *
 * @props {@link ImageProps}
 */
const Image = forwardRef<ImageForwardedReferenceType, ImageProps>(({ className, src, alt = '', ...props }, ref) => {
  if (!alt) {
    console.error(
      `The source of the image must have an alt attribute. Please review the <Image src="${src}" alt="${alt}" /> and provide an alt attribute for the image.`,
    )
  }

  return <Next$Image ref={ref} className={merge('rounded-md', className)} src={src} alt={alt} {...props} />
})
Image.displayName = 'Image'

export default Image
