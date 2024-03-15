import type { ComponentPropsWithoutRef, JSX } from 'react'

import merge from '../engine/merge'

export type FocusGridProps = ComponentPropsWithoutRef<'div'>

/**
 * The `FocusGrid` is a component which divides the screen into two parts, with
 * the first part being on the background color of the primary color.
 *
 * @props {@link FocusGridProps}
 */
function FocusGrid({ children, className, ...props }: FocusGridProps): JSX.Element {
  return (
    <div
      {...props}
      className={merge(
        'grid lg:grid-cols-2 grid-rows-1',
        '[&>*:first-child]:hidden [&>*:first-child]:bg-primary [&>*:first-child]:lg:flex',
        className,
      )}>
      {children}
    </div>
  )
}

export default FocusGrid
