import { forwardRef, type ElementRef } from 'react'

import { ToastClose as Radix$ToastClose, type ToastCloseProps as Radix$ToastCloseProps } from '@radix-ui/react-toast'

import merge from '../engine/merge'
import Icon from '../icon/icon'

/**
 * The forwarded reference type of the toast close button.
 */
export type ToastCloseForwardedReferenceType = ElementRef<typeof Radix$ToastClose>

export interface ToastCloseProps extends Radix$ToastCloseProps {}

/**
 * A React Client Component (**RCC**) that renders a toast close button which is
 * connected to the toast context and only takes action related to it.
 *
 * @see https://ui.shadcn.com/docs/components/toast
 *
 * @props {@link ToastCloseProps}
 */
const ToastClose = forwardRef<ToastCloseForwardedReferenceType, ToastCloseProps>(({ className, ...props }, ref) => (
  <Radix$ToastClose
    ref={ref}
    className={merge(
      'rounded-md p-1.5 text-foreground/50 opacity-50 transition-opacity',
      'group-hover:opacity-100 hover:text-foreground focus:opacity-100',
      'focus:outline-none focus:ring-2',
      className,
    )}
    toast-close=""
    {...props}>
    <Icon name="Cross1" className="h-4 w-4" aria-hidden="true" />
  </Radix$ToastClose>
))

ToastClose.displayName = 'ToastClose'

export default ToastClose
