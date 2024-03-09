import { forwardRef, type HTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'

import styled from '../engine/styled'

const headingStyles = styled({
  base: 'text-foreground',
  variants: {
    variant: {
      h1: 'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif',
      h2: 'text-3xl font-bold tracking-tighter md:text-4xl/tight',
      h3: 'text-xl font-semibold',
      h4: 'text-lg font-semibold',
      h5: 'text-base font-medium',
      h6: 'text-sm font-medium',
    },
  },
})

/**
 * The reference type of the heading. It is used to forward the ref to the
 * underlying HTML element.
 */
export type HeadingForwardedReferenceType = HTMLHeadingElement

/**
 * The variant of the heading. It corresponds to the level of the classic
 * HTML heading hierarchy, *i.e.*, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
 */
export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HTMLHeadingElementAttributes = HTMLAttributes<HTMLHeadingElement>

export interface HeadingProps extends HTMLHeadingElementAttributes {
  /**
   * The variant of the heading. It corresponds to the level of the classic
   * HTML heading hierarchy, *i.e.*, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. It is
   * also used to define the size and specific styles of the HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Section_Elements
   * @see {@link HeadingVariant}
   */
  variant: HeadingVariant
  /**
   * The boolean which defines if the button will forward its properties to the
   * slottable child passed in via the `children` prop.
   *
   * If `true`, this will modify the behaviour of the JSX to inject the button's
   * properties and styles into the child.
   *
   * @default false
   */
  asChild?: boolean
}

/**
 * The heading component is used to define the titles of the page. It is
 * available in different variants, *i.e.*, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
 *
 * It is also possible to use the `asChild` prop to forward the properties of
 * the heading to the slottable child passed in via the `children` prop.
 *
 * @example
 * ```tsx
 * <Heading variant="h1">Hello, world!</Heading>
 * ```
 *
 * @props {@link HeadingProps}
 */
const Heading = forwardRef<HeadingForwardedReferenceType, HeadingProps>(
  ({ children, className, asChild = false, variant, ...props }, ref) => {
    const RootElement = asChild ? Slot : variant

    return (
      <RootElement {...props} ref={ref} className={headingStyles({ variant, className })}>
        {children}
      </RootElement>
    )
  },
)

export default Heading
