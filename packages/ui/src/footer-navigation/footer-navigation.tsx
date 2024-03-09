import { type ComponentPropsWithoutRef, type JSX } from 'react'

import merge from '../engine/merge'

export type FooterNavigationProps = ComponentPropsWithoutRef<'footer'>

/**
 * The component in which the anchors for the footer are placed. This component
 * is part of the `Footer` component. See the example below:
 *
 * @example
 * ```tsx
 * import Footer from '@louffee/ui/footer'
 * import FooterNavigation from '@louffee/ui/footer-navigation'
 *
 * <Footer>
 *   <FooterNavigation>
 *     // The Links go here.
 *   </FooterNavigation>
 * </Footer>
 * ```
 *
 * @props {@link FooterNavigationProps}
 */
function FooterNavigation({ children, className, ...props }: FooterNavigationProps): JSX.Element {
  return (
    <nav {...props} className={merge('sm:ml-auto flex gap-4 sm:gap-6', className)}>
      {children}
    </nav>
  )
}

export default FooterNavigation
