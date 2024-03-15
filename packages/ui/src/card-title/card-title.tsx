'use client'

import { forwardRef, type HTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'

import merge from '../engine/merge'

/**
 * The type of the `ref` prop that is forwarded to the underlying `h3` or
 * slotted element.
 */
export type CardTitleForwardedReferenceType = HTMLParagraphElement

/**
 * @internal The React-adapted native element attributes for the `h3` element.
 */
type HTMLHeadingElementAttributes = HTMLAttributes<HTMLHeadingElement>

export interface CardTitleProps extends HTMLHeadingElementAttributes {
  /**
   * The boolean which defines that, if `true`, all the properties will be
   * passed from the underlying element to the first slottable child. Otherwise,
   * the component will render the `h3` element.
   *
   * @default false
   */
  asChild?: boolean
}

/**
 * The `CardTitle` is a composite React component which is semantically defined
 * to be used in collaboration with the other components of composition of the
 * `Card` React component.
 *
 * Its default behaviour is to render the `h3` element, however, this component
 * can be slotted to render a different HTML element which would inherit the
 * properties if the {@link CardTitleProps.asChild | `asChild`} prop is set to
 * `true`.
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
 * @props {@link CardTitleProps}
 */
const CardTitle = forwardRef<CardTitleForwardedReferenceType, CardTitleProps>(({ children, className, asChild = false, ...props }, ref) => {
  const RootElement = asChild ? Slot : 'h3'

  return (
    <RootElement ref={ref} className={merge('font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </RootElement>
  )
})
CardTitle.displayName = 'CardTitle'

export default CardTitle
