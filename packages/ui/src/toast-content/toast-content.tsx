import { HTMLAttributes, type JSX } from 'react'

import merge from '../engine/merge'

/**
 * The attributes for the HTML `div` element.
 */
export type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

export interface ToastContentProps extends HTMLDivElementAttributes {}

/**
 * The `ToastContent` is a React component which renders a semantic wrapper of
 * the content of the toast composite component.
 *
 * @props {@link ToastContentProps}
 */
function ToastContent({ children, className, ...props }: ToastContentProps): JSX.Element {
  return (
    <div {...props} className={merge('flex flex-col justify-center gap-1 w-full', className)}>
      {children}
    </div>
  )
}

export default ToastContent
