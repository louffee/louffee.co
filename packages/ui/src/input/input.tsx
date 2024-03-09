'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'

import merge from '../engine/merge'

/**
 * The type of the forwarded reference for the input component.
 */
export type InputForwardedReferenceType = HTMLInputElement

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * The input component which styles the native input element for the application
 * with a consistent look and feel.
 *
 * @example
 * ```tsx
 * import Input from '@louffee/ui/input'
 *
 * <Input type="text" placeholder="Enter your email" />
 * ```
 *
 * @props {@link InputProps}
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', ...props }, ref) => (
  <input
    type={type}
    className={merge(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = 'Input'

export default Input
