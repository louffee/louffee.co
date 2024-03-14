import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm as useForm$ReactHookForm,
  type FieldValues,
  type UseFormProps as HookForm$UseFormProps,
  type UseFormReturn as HookForm$UseFormReturn,
} from 'react-hook-form'
import type { Schema } from 'zod'

/**
 * The interface which defines and maps the props of the `useForm()` hook. It
 * utilises the `UseFormProps` interface from the `react-hook-form` package.
 *
 * @see https://react-hook-form.com
 */
export interface UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = // biome-ignore lint/suspicious/noExplicitAny:
  any,
> extends HookForm$UseFormProps<TFieldValues, TContext> {
  /**
   * The schema which defines the shape of the form values with Zod.
   *
   * @see https://nehalist.io/react-hook-form-with-nextjs-server-actions
   */
  schema?: Schema<TFieldValues>
}

/**
 * The interface for the return value of the `useForm()` hook. It is the same as
 * the return value of the `useForm()` hook from `react-hook-form`.
 *
 * The `TFieldValues` generic is the shape of the form values.
 *
 * @see https://react-hook-form.com
 */
export interface UseFormReturnType<
  TFieldValues extends FieldValues = FieldValues,
  TContext = // biome-ignore lint/suspicious/noExplicitAny:
  any,
> extends HookForm$UseFormReturn<TFieldValues, TContext> {}

/**
 * The `useForm()` is a custom React hook which defines the behaviour of a form
 * shaped by the given Zod {@link UseFormProps.schema | schema}.
 *
 * @example
 * ```ts
 * const schema = z.object({
 *   email: z.string().email(),
 * });
 *
 * const { register, handleSubmit, formState: { errors } } = useForm({
 *   schema,
 * });
 * ```
 */
function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = // biome-ignore lint/suspicious/noExplicitAny:
  any,
>({ schema, mode = 'all', ...props }: UseFormProps<TFieldValues, TContext>): UseFormReturnType<TFieldValues, TContext> {
  const hook = useForm$ReactHookForm({
    resolver: schema ? zodResolver(schema) : undefined,
    mode,
    ...props,
  })

  return hook
}

export default useForm
