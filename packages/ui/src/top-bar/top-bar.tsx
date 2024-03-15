import type { ComponentPropsWithoutRef, JSX } from 'react'

import AfloatBar from '../afloat-bar/afloat-bar'
import merge from '../engine/merge'
import ViewportAxis from '../viewport-axis/viewport-axis'

export type TopBarProps = ComponentPropsWithoutRef<'header'>

/**
 * Renders the top bar component that displays at the top of the viewport.
 *
 * @example
 * ```tsx
 * <TopBar>
 *   <TopBarButton>Lorem</TopBarButton>
 *   <TopBarButton>Ipsum</TopBarButton>
 * </TopBar>
 * ```
 *
 * @props {@link TopBarProps}
 */
function TopBar({ children, className, ...props }: TopBarProps): JSX.Element {
  return (
    <ViewportAxis position="top-center">
      <AfloatBar asChild={true} className={merge('bg-background/60 backdrop-blur-lg', className)} {...props}>
        <header>{children}</header>
      </AfloatBar>
    </ViewportAxis>
  )
}

export default TopBar
