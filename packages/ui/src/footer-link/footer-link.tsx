import { type ComponentPropsWithoutRef, type JSX } from 'react'

import Link from 'next/link'

import merge from '../engine/merge'

export type FooterLinkProps = ComponentPropsWithoutRef<typeof Link>

/**
 * The styled anchor for the footer navigation.
 *
 * @example
 * ```tsx
 * import FooterLink from '@louffee/ui/footer-link'
 *
 * <FooterLink href="/about">About</FooterLink>
 * ```
 *
 * @props {@link FooterLink}
 */
function FooterLink({ children, className, ...props }: FooterLinkProps): JSX.Element {
  return (
    <Link {...props} className={merge('text-xs hover:underline underline-offset-4', className)}>
      {children}
    </Link>
  )
}

export default FooterLink
