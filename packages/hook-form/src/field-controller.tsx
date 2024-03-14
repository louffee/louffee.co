import type { JSX, ReactElement } from 'react'

import {
  Controller as HookForm$Controller,
  type FieldValues,
  type ControllerFieldState as HookForm$ControllerFieldState,
  type ControllerProps as HookForm$ControllerProps,
  type ControllerRenderProps as HookForm$ControllerRenderProps,
  type FieldPath as HookForm$FieldPath,
  type UseFormStateReturn as HookForm$UseFormStateReturn,
} from 'react-hook-form'

export interface FieldRenderFnProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends HookForm$FieldPath<TFieldValues> = HookForm$FieldPath<TFieldValues>,
> {
  /**
   * The object which contains the field props. This object contains the
   * properties, *e.g.*, which are injected into the input element to control
   * the field, *e.g.*, the field `value`, `onChange`, `onBlur`, and `ref`.
   *
   * @see https://react-hook-form.com/docs/usecontroller
   */
  field: HookForm$ControllerRenderProps<TFieldValues, TName>
  /**
   * The object which contains the field state. This object contains the
   * properties such, *e.g.*, the field is touched, dirty, or invalid.
   *
   * @see {@link HookForm$ControllerFieldState}
   */
  fieldState: HookForm$ControllerFieldState
  /**
   * The object which contains the form state. This object contains the
   * properties, *e.g.*, the form is submitting, submitting, or dirty.
   *
   * @see {@link HookForm$UseFormStateReturn}
   */
  formState: HookForm$UseFormStateReturn<TFieldValues>
}

/**
 * The type which defines the parameters and return type of the render function
 * passed down to the `FieldController` component.
 */
export type FieldRenderFn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends HookForm$FieldPath<TFieldValues> = HookForm$FieldPath<TFieldValues>,
> = (props: FieldRenderFnProps<TFieldValues, TName>) => ReactElement

/**
 * @internal The type which defines the props for the `FieldController`
 *           component. This type is used to pick the props from the
 *           `FieldController` component and pass them down to the `Controller`.
 */
type PickedFieldControllerProps = Omit<HookForm$ControllerProps, 'render'>

/**
 * The interface which defines the props for the `FieldController` component.
 */
export interface FieldControllerProps extends PickedFieldControllerProps {
  /**
   * The `children` prop is defined as a render function which will be passed
   * down to the `FieldController`  component. This function will be called with
   * the `FieldController` props.
   *
   * @see {@link FieldRenderFn}
   */
  children: FieldRenderFn
}

/**
 * The `FieldController` is a component which wraps the `Controller` component
 * from the `react-hook-form` library, connecting the field to the form state.
 *
 * @example
 * ```tsx
 * <FieldController name="email" control={control} rules={{ required: true }}>
 *   {({ field, fieldState, formState }) => (
 *    <input type="email" {...field} />
 *   })}
 * </FieldController>
 * ```
 *
 * @props {@link FieldControllerProps}
 */
function FieldController({ children, ...props }: FieldControllerProps): JSX.Element {
  return <HookForm$Controller {...props} render={children} />
}

export default FieldController
