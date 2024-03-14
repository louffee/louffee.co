import { useFormState as useFormState$HookForm, type FieldValues, type FormState } from 'react-hook-form'

/**
 * The type which defines the return value of the `useFormState()` hook as a
 * tuple containing the form state and the form handlers.
 */
export type UseFormStateReturnType<TFieldValues extends FieldValues = FieldValues> = FormState<TFieldValues>

/**
 * The `useFormState()` is a custom React hook which returns the form state and
 * the form handlers from [React Hook Form](https://react-hook-form.com).
 *
 * Note that to use this hook, the host component must be wrapped in a
 * `FormController` component.
 *
 * @see {@link UseFormStateReturnType}
 */
function useFormState<TFieldValues extends FieldValues = FieldValues>(): UseFormStateReturnType<TFieldValues> {
  const formState = useFormState$HookForm<TFieldValues>()

  return formState
}

export default useFormState
