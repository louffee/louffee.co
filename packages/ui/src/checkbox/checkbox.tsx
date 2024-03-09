import { ElementRef, forwardRef } from 'react'

import {
  Indicator as Radix$CheckboxIndicator,
  Root as Radix$CheckboxRoot,
  type CheckboxProps as Radix$CheckboxRootProps,
} from '@radix-ui/react-checkbox'

import merge from '../engine/merge'
import Icon from '../icon/icon'

/**
 * The type of the ref that is forwarded by the `Checkbox` component.
 */
export type CheckboxForwardedReferenceType = ElementRef<typeof Radix$CheckboxRoot>

/**
 * The `CheckboxStateUpdateEvent` is a class which defines the virtual event of
 * the checkbox state update.
 */
export class CheckboxStateUpdateEvent {
  constructor(
    /**
     * The boolean that represents the new state of the checkbox.
     */
    public readonly checked: boolean,
  ) {}
}

/**
 * The type which defines the event handler for the checkbox state update.
 *
 * @see {@link CheckboxStateUpdateEvent}
 */
export type CheckboxStateUpdateEventHandler = (event: CheckboxStateUpdateEvent) => void

/**
 * The type which defines the either boolean or the string literal
 * 'indeterminate' as the state of the checkbox.
 */
export type CheckboxState = boolean | 'indeterminate'

export interface CheckboxProps extends Omit<Radix$CheckboxRootProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> {
  /**
   * The `checked` prop is used to set the state of the checkbox. It can be a
   * boolean value or the string literal 'indeterminate'.
   *
   * @see https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference
   */
  checked?: CheckboxState
  /**
   * The `defaultChecked` prop is used to set the initial state of the checkbox.
   * It can be a boolean value or the string literal 'indeterminate'.
   *
   * @see https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference
   */
  defaultChecked?: CheckboxState
  /**
   * The `onCheckedChange` prop is used to set the event handler for the
   * checkbox state change.
   *
   * As the parameter of this function is the `CheckboxStateUpdateEvent` class,
   * a class instance of this type which is the virtual event of the checkbox
   * state update.
   *
   * @see {@link CheckboxStateUpdateEvent}
   */
  onCheckedUpdate?: CheckboxStateUpdateEventHandler
}

/**
 * The `Checkbox` component is used to create a checkbox input. It is a wrapper
 * around the `@radix-ui/react-checkbox` package and accepts all the props that
 * the native input element accepts.
 *
 * @example
 * ```tsx
 * <Checkbox />
 * ```
 *
 * @props {@link CheckboxProps}
 */
const Checkbox = forwardRef<CheckboxForwardedReferenceType, CheckboxProps>(({ className, checked, onCheckedUpdate, ...props }, ref) => {
  /**
   * @internal Translate the Radix UI's `onCheckedChange` prop to the function
   *           that accepts the `CheckboxStateUpdateEvent` class instance.
   *
   * @see {@link CheckboxStateUpdateEvent}
   * @see {@link CheckboxStateUpdateEventHandler}
   */
  function handleCheckChange(checked: boolean): void {
    if (typeof onCheckedUpdate === 'function') {
      onCheckedUpdate(new CheckboxStateUpdateEvent(checked))
    }
  }

  return (
    <Radix$CheckboxRoot
      ref={ref}
      checked={checked}
      onCheckedChange={handleCheckChange}
      className={merge(
        'peer h-5 w-5 shrink-0 rounded-sm border border-primary',
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className,
      )}
      {...props}>
      <Radix$CheckboxIndicator className={merge('flex items-center justify-center text-current')}>
        <Icon name="Check" height={20} width={20} />
      </Radix$CheckboxIndicator>
    </Radix$CheckboxRoot>
  )
})
Checkbox.displayName = 'Checkbox'

export default Checkbox
