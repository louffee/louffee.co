import type { JSX, ReactNode } from 'react'

import { FormProvider, type FieldValues } from 'react-hook-form'

import useForm, { type UseFormProps } from './use-form'

/**
 * The interface which defines the props for the `FormController` component.
 *
 * @see https://react-hook-form.com
 */
export interface FormControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = // biome-ignore lint/suspicious/noExplicitAny:
  any,
> extends UseFormProps<TFieldValues, TContext> {
  /**
   * The children passed down to the `FormController` component and to which the
   * form context will be available.
   *
   * @see {@link ReactNode}
   */
  children: ReactNode | ReactNode[]
}

/**
 * The `FormController` component is a client-side controller which initialises
 * the `useForm()` hook and provides the form context to its children.
 *
 * This component also handles the form default behaviours and settings via the
 * [Hook Form](https://react-hook-form.com).
 *
 * @props {@link FormControllerProps}
 *
 * @see https://react-hook-form.com
 */
function FormController<
  TFieldValues extends FieldValues = FieldValues,
  TContext = // biome-ignore lint/suspicious/noExplicitAny:
  any,
>({ children, ...props }: FormControllerProps<TFieldValues, TContext>): JSX.Element {
  const control = useForm<TFieldValues>(props)

  return <FormProvider {...control}>{children}</FormProvider>
}

export default FormController
