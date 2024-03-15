'use client'

import { forwardRef, type HTMLAttributes } from 'react'

import merge from '../engine/merge'

/**
 * The type of the `ref` prop that is forwarded to the underlying `div` element.
 */
export type CardHeaderForwardedReferenceType = HTMLDivElement

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

/**
 * The props for the `CardHeader` component.
 */
export interface CardHeaderProps extends HTMLDivElementAttributes {}

/**
 * The `CardHeader` composite React component which styles the model box header
 * of a card.
 *
 * Note that this component is intended to be used with the `Card` and its other
 * composite components.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *    <CardTitle>Card Title</CardTitle>
 *    <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 * </Card>
 * ```
 *
 * @props {@link CardHeaderProps}
 */
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={merge('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
))
CardHeader.displayName = 'CardHeader'

export default CardHeader
