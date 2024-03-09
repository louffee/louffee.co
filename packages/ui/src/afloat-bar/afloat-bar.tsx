'use client'

import { type HTMLAttributes, type JSX, type ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

import merge from '../engine/merge'

type HTMLElementAttributes = HTMLAttributes<HTMLElement>

export interface AfloatBarProps extends HTMLElementAttributes {
  /**
   * The content of the afloat bar. It is required to have at least one child.
   */
  children: ReactNode
  /**
   * The boolean which defines if the afloat bar will forward its properties to
   * the slottable child passed in via the `children` prop.
   *
   * @default false
   */
  asChild?: boolean
}

/**
 * The afloat bar is a floating bar that can be used to combine actions and/or
 * information in a single line. It is a simple container that can be used to
 * build more complex components, *e.g.*, headers, navigation bars.
 *
 * @props {@link AfloatBarProps}
 */
function AfloatBar({ children, asChild, className, ...props }: AfloatBarProps): JSX.Element {
  const RootElement = asChild ? Slot : 'div'

  return (
    <RootElement
      {...props}
      className={merge(
        'flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10',
        className,
      )}>
      {children}
    </RootElement>
  )
}

export default AfloatBar
