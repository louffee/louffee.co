import { forwardRef } from 'react'

import { Label as Radix$Label, type LabelProps as Radix$LabelProps } from '@radix-ui/react-label'

import merge from '../engine/merge'

/**
 * The `Label` component is used to provide a label for an input element.
 */
export type LabelForwardedReferenceType = HTMLLabelElement

export interface LabelProps extends Radix$LabelProps {}

/**
 * The `Label` component is used to provide a label for an input element.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" type="email" />
 * ```
 *
 * @props {@link LabelProps}
 */
const Label = forwardRef<LabelForwardedReferenceType, LabelProps>(({ children, className, ...props }) => (
  <Radix$Label
    {...props}
    className={merge('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}>
    {children}
  </Radix$Label>
))
Label.displayName = 'Label'

export default Label
