import { type ComponentPropsWithoutRef, type JSX } from 'react'

import merge from '../engine/merge'

export type FooterProps = ComponentPropsWithoutRef<'footer'>

/**
 * The wrapper for the footer of the pages. The footer passes the children to
 * the parent container on the HTML markup.
 *
 * @props {@link FooterProps}
 */
function Footer({ children, className, ...props }: FooterProps): JSX.Element {
  return (
    <footer
      {...props}
      className={merge('flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t', className)}>
      {children}
    </footer>
  )
}

export default Footer
