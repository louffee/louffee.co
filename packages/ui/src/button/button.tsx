'use client'

import { forwardRef, type ButtonHTMLAttributes, type JSX, type ReactElement } from 'react'

import { Slot } from '@radix-ui/react-slot'

import merge from '../engine/merge'
import styled, { type StyledVariationProps } from '../engine/styled'
import type { IconProps } from '../icon/icon'

const buttonStyles = styled({
  base: merge(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  ),
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outlined: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      sm: 'h-8 rounded-md px-3 text-xs',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

/**
 * The type of the props that are passed to stylesheet factory.
 */
export type ButtonVariationProps = StyledVariationProps<typeof buttonStyles>

/**
 * The type of the reference forwarded by the `Button` component.
 */
export type ButtonForwardedReferenceType = HTMLButtonElement

/**
 * The size of the button.
 */
export type ButtonSize = ButtonVariationProps['size']

/**
 * The variant of the button.
 */
export type ButtonVariant = ButtonVariationProps['variant']

type HTMLButtonElementAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type HTMLButtonElementAttributesExceptSome = Omit<HTMLButtonElementAttributes, 'children'>

export interface ButtonProps extends HTMLButtonElementAttributesExceptSome {
  /**
   * The label or content of the button. This can be a string, a JSX element, or
   * an instance of the `Icon` component.
   *
   * @example
   * ```tsx
   * <Button>Click</Button>
   * ```
   *
   * It is only recommended to pass a JSX element if the `asChild` prop is set
   * to `true`. If the `asChild` is set to `true`, the button will forward its
   * properties to the slottable child passed in via the `children` prop.
   *
   * @example
   * ```tsx
   * <Button asChild={true}>
   *   <Link href="/other-page">Click</Link>
   * </Button>
   * ```
   *
   * It is only recommended to pass an instance of the Icon component if the
   * `size` prop is set to `icon`.
   *
   * @example
   * ```tsx
   * <Button size="icon">
   *   <Icon name="GitHubLogo" height={18} width={18} />
   * </Button>
   * ```
   *
   * @see {@link JSX.Element}
   * @see {@link ReactElement}
   * @see {@link IconProps}
   */
  children: JSX.Element | string | ReactElement<IconProps>
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
  /**
   * The size of the button. This will modify the padding, height, and font size
   * of the button.
   *
   * @default 'md'
   *
   * @see {@link ButtonSize}
   */
  size?: ButtonSize
  /**
   * The variant of the button. This will modify the padding and font size of
   * the button.
   *
   * @default 'primary'
   *
   * @see {@link ButtonVariant}
   */
  variant?: ButtonVariant
}

/**
 * The `Button` component is a button element that is styled according to its
 * variation and size, rendering a call to action or link to the user.
 *
 * **Note:** By default, every button is of type `button`. If you want to use
 * the button as a submit button, you can pass the `type` prop as `submit`.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Click</Button>
 * ```
 *
 * @props {@link ButtonProps}
 */
const Button = forwardRef<ButtonForwardedReferenceType, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      disabled = false,
      type = 'button',
      onClick,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const RootElement = asChild ? Slot : 'button'

    if (size === 'icon' && !ariaLabel && !ariaLabelledBy) {
      console.warn(
        'The icon-sized button is missing an aria-label. This can make the button inaccessible to screen readers. Please add an aria-label or aria-labelledby to the button.',
      )
    }

    return (
      <RootElement
        className={merge(buttonStyles({ variant, size, className }))}
        type={type}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        {...props}>
        {children}
      </RootElement>
    )
  },
)
Button.displayName = 'Button'

export default Button
