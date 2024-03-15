import { forwardRef, type HTMLAttributes } from 'react'

import merge from '../engine/merge'

/**
 * The forward reference type for the card component.
 */
export type CardForwardedReferenceType = HTMLDivElement

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

/**
 * The props for the card component.
 */
export interface CardProps extends HTMLDivElementAttributes {}

/**
 * The root of the card component which may be enhanced with the composition of
 * its sub-components such as the ones for the card header, title, description,
 * and content.
 *
 * @example
 * ```tsx
 * <Card>
 *   Content here...
 * </Card>
 * ```
 *
 * @props {@link CardProps}
 */
const Card = forwardRef<CardForwardedReferenceType, CardProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={merge('rounded-xl border bg-card text-card-foreground shadow', className)} {...props}>
    {children}
  </div>
))
Card.displayName = 'Card'

export default Card
