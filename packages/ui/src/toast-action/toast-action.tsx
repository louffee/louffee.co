'use client'

import { forwardRef, type ElementRef } from 'react'

import { ToastAction as Radix$ToastAction, type ToastActionProps as Radix$ToastActionProps } from '@radix-ui/react-toast'

import merge from '../engine/merge'

/**
 * The forwarded reference type of the toast action.
 */
export type ToastActionForwardedReferenceType = ElementRef<typeof Radix$ToastAction>

export interface ToastActionProps extends Radix$ToastActionProps {}

/**
 * A React Client Component (**RCC**) that renders a toast action.
 *
 * @see https://ui.shadcn.com/docs/components/toast
 *
 * @props {@link ToastActionProps}
 */
const ToastAction = forwardRef<ToastActionForwardedReferenceType, ToastActionProps>(({ className, children, ...props }, ref) => (
  <Radix$ToastAction
    ref={ref}
    className={merge(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border',
      'bg-transparent px-3 text-sm font-medium ring-offset-background',
      'transition-colors hover:bg-secondary focus:outline-none focus:ring-2',
      'focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
      'disabled:opacity-50',
      className,
    )}
    {...props}>
    {children}
  </Radix$ToastAction>
))

export default ToastAction
