import { type HTMLAttributes, type JSX } from 'react'

import merge from '../engine/merge'
import styled, { type StyledVariationProps } from '../engine/styled'

const viewportAxisStyles = styled({
  base: 'fixed',
  variants: {
    position: {
      'top-center': 'top-8 left-1/2 transform -translate-x-1/2',
      'bottom-center': 'bottom-8 left-1/2 transform -translate-x-1/2',
    },
  },
})

type HTMLElementAttributes = HTMLAttributes<HTMLElement>

export type ViewportAxisPosition = NonNullable<StyledVariationProps<typeof viewportAxisStyles>['position']>

export interface ViewportAxisProps extends HTMLElementAttributes {
  /**
   * The position of the viewport axis.
   *
   * @see {@link ViewportAxisPosition}
   */
  position: ViewportAxisPosition
}

/**
 * Represents a component that displays a viewport axis.
 *
 * @example
 * ```tsx
 * <ViewportAxis position="top-center">
 *   <div>This will be displayed at the top-center of the viewport.</div>
 * </ViewportAxis>
 * <ViewportAxis position="bottom-center">
 *   <div>This will be displayed at the bottom-center of the viewport</div>
 * </ViewportAxis>
 * ```
 *
 * @props {@link ViewportAxisProps}
 */
function ViewportAxis({ children, position, className, ...props }: ViewportAxisProps): JSX.Element {
  return (
    <div {...props} className={merge(viewportAxisStyles({ className, position }))}>
      {children}
    </div>
  )
}

export default ViewportAxis
