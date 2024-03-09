import { forwardRef, type ElementRef } from 'react'

import {
  ToastDescription as Radix$ToastDescription,
  type ToastDescriptionProps as Radix$ToastDescriptionProps,
} from '@radix-ui/react-toast'

import merge from '../engine/merge'

export type ToastDescriptionForwardedReferenceType = ElementRef<typeof Radix$ToastDescription>

export interface ToastDescriptionProps extends Radix$ToastDescriptionProps {}

/**
 * A React Client Component (**RCC**) that renders a toast description.
 *
 * @props {@link ToastDescriptionProps}
 */
const ToastDescription = forwardRef<ToastDescriptionForwardedReferenceType, ToastDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <Radix$ToastDescription {...props} ref={ref} className={merge('text-sm opacity-90', className)}>
      {children}
    </Radix$ToastDescription>
  ),
)

export default ToastDescription
