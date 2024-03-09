import { type JSX } from 'react'

import ToastClose from '../toast-close/toast-close'
import ToastContent from '../toast-content/toast-content'
import ToastDescription from '../toast-description/toast-description'
import ToastProvider from '../toast-provider/toast-provider'
import ToastTitle from '../toast-title/toast-title'
import Toast from '../toast/toast'
import useToast from '../use-toast/use-toast'

/**
 * The `ToastController` component is a controller that manages the toast
 * notifications. It is responsible for rendering the toast notifications based
 * on the inputs from the `useToast()` hook.
 *
 * @example
 * ```tsx
 * <ToastController />
 * ```
 */
function ToastController(): JSX.Element {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        const hasAction = !!action

        return (
          <Toast {...props} key={id}>
            <ToastContent>
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{description}</ToastDescription>
            </ToastContent>
            {hasAction && <div className="flex items-center gap-1">{action}</div>}
            <ToastClose />
          </Toast>
        )
      })}
    </ToastProvider>
  )
}

export default ToastController
