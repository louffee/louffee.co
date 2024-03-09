import { ReactElement, forwardRef, type ElementRef } from 'react'

import { Root as Radix$ToastRoot, type ToastProps as Radix$ToastProps } from '@radix-ui/react-toast'

import DangerIcon from '../danger-icon/danger-icon'
import merge from '../engine/merge'
import styled, { type StyledVariationProps } from '../engine/styled'
import InfoIcon from '../info-icon/info-icon'
import SuccessIcon from '../success-icon/success-icon'
import WarningIcon from '../warning-icon/warning-icon'

const toastStyles = styled({
  base: merge(
    'bg-background text-black group pointer-events-auto relative flex w-full',
    'items-center space-x-4 overflow-hidden rounded-md border p-2 shadow-lg',
    'transition-all data-[swipe=cancel]:translate-y-0',
    'data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-y)]',
    'data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)]',
    'data-[swipe=move]:transition-none data-[state=open]:animate-in',
    'data-[state=closed]:animate-out data-[swipe=end]:animate-out',
    'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
    'data-[state=open]:slide-in-from-top-full',
    'data-[state=open]:sm:slide-in-from-bottom-full',
  ),

  variants: {
    variant: {
      default: 'border-gray-500/30 p-2 pl-4',
      info: 'border-blue-500/30',
      danger: 'border-red-500/30',
      success: 'border-green-500/30',
      warning: 'border-yellow-500/30',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * The forwarded reference type of the toast.
 */
export type ToastForwardedReferenceType = ElementRef<typeof Radix$ToastRoot>

type ToastStylesProps = StyledVariationProps<typeof toastStyles>

/**
 * The string literal type of the toast variant.
 */
export type ToastVariant = NonNullable<ToastStylesProps['variant']>

/**
 * @internal The semantic icons for the toast.
 */
const SEMANTIC_ICONS: {
  [_ in ToastVariant]: null | ReactElement
} = {
  default: null,
  danger: <DangerIcon size="lg" />,
  info: <InfoIcon size="lg" />,
  success: <SuccessIcon size="lg" />,
  warning: <WarningIcon size="lg" />,
}

export interface ToastProps extends Radix$ToastProps {
  /**
   * The string literal type of the toast variant.
   *
   * @default 'default'
   */
  variant?: ToastVariant
}

/**
 * A React Client Component (**RCC**) that renders a toast.
 *
 * @props {@link ToastProps}
 */
const Toast = forwardRef<ToastForwardedReferenceType, ToastProps>(({ children, className, variant = 'default', ...props }, ref) => {
  const iconEl = SEMANTIC_ICONS[variant]
  const hasAction = !!iconEl

  return (
    <Radix$ToastRoot {...props} ref={ref} className={merge(toastStyles({ variant, className }))}>
      {hasAction && <div>{iconEl}</div>}
      <div className="flex items-center justify-center w-full">{children}</div>
    </Radix$ToastRoot>
  )
})

Toast.displayName = 'Toast'

export default Toast
