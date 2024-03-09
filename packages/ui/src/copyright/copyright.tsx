import { ComponentPropsWithoutRef, type JSX } from 'react'

import merge from '../engine/merge'

export type CopyrightProps = ComponentPropsWithoutRef<'p'>

/**
 * The styled HTML element for the copyright notice.
 *
 * @example
 * ```tsx
 * import Copyright from '@louffee/ui/copyright'
 *
 * <Copyright>
 *   &copy; {new Date().getFullYear()} Louffee Inc. All rights reserved.
 * </Copyright>
 * ```
 *
 * @props {@link CopyrightProps}
 */
function Copyright({ children, className, ...props }: CopyrightProps): JSX.Element {
  return (
    <p {...props} className={merge('text-xs text-gray-500 dark:text-gray-400', className)}>
      {children}
    </p>
  )
}

export default Copyright
