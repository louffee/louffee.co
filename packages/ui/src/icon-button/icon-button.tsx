'use client'

import { forwardRef, type JSX, type ReactElement } from 'react'

import Icon, { type IconName, type IconProps } from '../icon/icon'

import Button, { type ButtonForwardedReferenceType, type ButtonProps, type ButtonSize, type ButtonVariant } from '../button/button'

export type IconButtonVariant = ButtonVariant

export type IconButtonSize = ButtonSize

type RequiredPickedAccessibilityButtonProps = Required<Pick<ButtonProps, 'aria-label'>>
type ButtonPropsExceptSome = Omit<ButtonProps, 'children' | 'size' | keyof RequiredPickedAccessibilityButtonProps>

export interface IconButtonProps extends ButtonPropsExceptSome, RequiredPickedAccessibilityButtonProps {
  /**
   * The icon to be rendered inside the icon button.
   *
   * @see {@link IconName}
   */
  icon?: IconName
  /**
   * The content of the icon button. If you want to pass an icon, use the `icon`
   * prop instead.
   *
   * @see {@link ReactNode}
   */
  children?: JSX.Element
}

export type IconButtonForwardedReferenceType = ButtonForwardedReferenceType

/**
 * The `IconButton` component is a button element that renders an icon in the
 * centre of the button, styled to its variation, rendering a call to action or
 * link to the user.
 *
 * **Note:** By default, every icon button is of type `button`. If you want to
 * use the button as a submit button, you can pass the `type` prop as `submit`.
 *
 * @example
 * ```tsx
 * <IconButton icon="GitHubLogo" />
 * ```
 */
const IconButton = forwardRef<IconButtonForwardedReferenceType, IconButtonProps>(({ icon, children, ...props }, ref) => {
  const child = (icon ? <Icon name={icon} height={20} width={20} /> : children) as JSX.Element | ReactElement<IconProps>

  if (icon && children) {
    console.error(
      'You should not pass both icon and children to an icon button. This will default the icon property to the icon prop, but it is not recommended to pass both because the computation of the properties will be run over the children which will not be used. Please remove either the icon prop or the children.',
    )
  }

  return (
    <Button {...props} size="icon" ref={ref}>
      {child}
    </Button>
  )
})

export default IconButton
