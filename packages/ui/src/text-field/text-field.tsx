'use client'

import { forwardRef, useCallback, useMemo, type ChangeEvent as ReactChangeEvent } from 'react'

import Input, { type InputProps } from '../input/input'

/**
 * The type of the forwarded reference for the text field component.
 */
export type TextFieldForwardedReferenceType = HTMLInputElement

export interface TextFieldProps extends InputProps {
  /**
   * The `onInputChange()` callback is called when the value of the text field
   * changes and the new value is passed as the first argument to the callback.
   *
   * If provided, the text field will be a controlled component and the value
   * will be set by the parent component.
   */
  onInputChange?: (value: string) => void
  /**
   * The `format()` function is called when the value of the text field changes
   * and the new value is passed as the first argument to the function.
   *
   * This is useful for formatting the value of the text field before it is
   * passed to the `onInputChange()` callback.
   *
   * Also, this function provides the virtual event from the ReactJS API as the
   * second argument.
   */
  format?: (value: string, event?: ReactChangeEvent<HTMLInputElement>) => string
  /**
   * The `parse()` function is called when the value of the text field changes
   * and the new value is passed as the first argument to the function.
   *
   * This is useful for parsing the value of the text field before it is
   * passed to the `onInputChange()` callback.
   */
  parse?: (value: string) => string
}

/**
 * The text field component which styles the `Input` component and provides a
 * controlled interface for the parent component to manage the value of the
 * text field with formatting and parsing of the value.
 *
 * @example
 * ```tsx
 * import TextField from '@louffee/ui/text-field'
 *
 * <TextField type="text" placeholder="Enter your name" />
 * ```
 *
 * @props {@link TextFieldProps}
 */
const TextField = forwardRef<TextFieldForwardedReferenceType, TextFieldProps>(
  ({ value, onInputChange, format, parse, onChange, className, autoComplete = 'off', ...props }, ref) => {
    const inputValue = useMemo(() => (typeof format === 'function' && typeof value === 'string' ? format(value) : value), [format, value])

    const handleChange = useCallback(
      (event: ReactChangeEvent<HTMLInputElement>) => {
        if (typeof onInputChange === 'function') {
          const parsedInputValue = typeof parse === 'function' ? parse(event.target.value) : event.target.value

          onInputChange(parsedInputValue)
        }

        if (typeof onChange === 'function') {
          onChange(event)
        }

        if (typeof format === 'function') {
          const inputValue = event.target.value
          event.target.value = format(inputValue, event)
        }
      },
      [onInputChange, parse, onChange, format],
    )

    return <Input {...props} ref={ref} onChange={handleChange} autoComplete={autoComplete} value={inputValue} />
  },
)

export default TextField
