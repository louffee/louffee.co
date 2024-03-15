import { forwardRef, type HTMLAttributes } from 'react'

import merge from '../engine/merge'

/**
 * The type of the `ref` prop that is forwarded to the underlying `p` element.
 */
export type CardDescriptionForwardedReferenceType = HTMLParagraphElement

/**
 * @internal The React-adapted native element attributes for the `p` element.
 */
type HTMLParagraphElementAttributes = HTMLAttributes<HTMLParagraphElement>

/**
 * The props for the `CardDescription` component.
 */
export interface CardDescriptionProps extends HTMLParagraphElementAttributes {}

/**
 * The `CardDescription` is a React composite component which is semantically
 * defined to be used in collaboration with the other components of composition
 * of the `Card` React component.
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
 * @props {@link CardDescriptionProps}
 */
const CardDescription = forwardRef<CardDescriptionForwardedReferenceType, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <p ref={ref} className={merge('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  ),
)
CardDescription.displayName = 'CardDescription'

export default CardDescription
