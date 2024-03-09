'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'

import merge from '../engine/merge'

export type BlockquoteForwardedReferenceType = ElementRef<'blockquote'>

export type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>

/**
 * The Blockquote component is used to display a quotation in a larger, serif
 * font.
 *
 * @example
 * ```tsx
 * import Blockquote from '@louffee/ui/blockquote'
 *
 * <Blockquote>
 *   The platform was so easy to use. I found a great apartment near my
 *   university, and the whole process was smooth and stress-free.
 * </Blockquote>
 * ```
 *
 * @props {@link BlockquoteProps}
 */
const Blockquote = forwardRef<BlockquoteForwardedReferenceType, BlockquoteProps>(({ children, className, ...props }, ref) => (
  <blockquote ref={ref} className={merge('text-xl font-serif text-gray-500/relaxed dark:text-gray-400/relaxed', className)} {...props}>
    {children}
  </blockquote>
))

Blockquote.displayName = 'Blockquote'

export default Blockquote
