import { ComponentPropsWithoutRef, type JSX } from 'react'

import Link from 'next/link'

import Button, { type ButtonProps } from '../button/button'
import merge from '../engine/merge'

type ButtonPropsExceptSome = Omit<ButtonProps, 'variant'>
type LinkProps = ComponentPropsWithoutRef<typeof Link>
type PickedLinkProps = Pick<LinkProps, 'href' | 'target' | 'rel'>

export interface TopBarButtonProps extends ButtonPropsExceptSome, PickedLinkProps {}

/**
 * This component renders an anchor element which is styled as a ghost button,
 * behaving like a link with cohesive appearance.
 *
 * @example
 * ```tsx
 * <TopBarButton href='/about'>About</TopBarButton>
 * ```
 *
 * @props {@link TopBarButtonProps}
 */
function TopBarButton({ children, className, href, target = '_self', rel, ...props }: TopBarButtonProps): JSX.Element {
  return (
    <Button {...props} variant="ghost" className={merge('font-medium', className)} asChild={true}>
      <Link href={href} target={target} rel={rel}>
        {children}
      </Link>
    </Button>
  )
}

export default TopBarButton
