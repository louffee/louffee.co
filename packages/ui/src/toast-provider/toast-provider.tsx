import { type JSX, type ReactNode } from 'react'

import { ToastProvider as Radix$ToastProvider, ToastViewport as Radix$ToastViewport } from '@radix-ui/react-toast'

import merge from '../engine/merge'

export interface ToastProviderProps {
  /**
   * The children to render within the provider.
   */
  children: ReactNode
}

/**
 * A component that provides the toast context to its children and renders the
 * controller of the toast viewport.
 *
 * @props {@link ToastProviderProps}
 */
function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  return (
    <Radix$ToastProvider swipeDirection="down" swipeThreshold={50}>
      {children}
      <Radix$ToastViewport
        className={merge(
          'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        )}
      />
    </Radix$ToastProvider>
  )
}

export default ToastProvider
