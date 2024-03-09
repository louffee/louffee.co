import { forwardRef, type ElementRef } from 'react'

import { ToastTitle as Radix$ToastTitle, type ToastTitleProps as Radix$ToastTitleProps } from '@radix-ui/react-toast'

import merge from '../engine/merge'

export type ToastTitleForwardedReferenceType = ElementRef<typeof Radix$ToastTitle>

export interface ToastTitleProps extends Radix$ToastTitleProps {}

/**
 * A React Client Component (**RCC**) that renders a toast title.
 *
 * @props {@link ToastTitleProps}
 */
const ToastTitle = forwardRef<ToastTitleForwardedReferenceType, ToastTitleProps>(({ className, children, ...props }, ref) => (
  <Radix$ToastTitle {...props} ref={ref} className={merge('text-sm font-semibold', className)}>
    {children}
  </Radix$ToastTitle>
))

export default ToastTitle
