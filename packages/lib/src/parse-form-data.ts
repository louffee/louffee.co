/**
 * The `parseFormData()` function takes a `FormData` object and returns a plain
 * JavaScript object of type `T` with the form values.
 *
 * @template T The type of the form values object.
 *
 * @example
 * ```ts
 * const formData = new FormData()
 * formData.append('email', 'email@email.com')
 * const formValues = parseFormData(formData) // { email: 'email@email.com' }
 * ```
 */
function parseFormData<T extends object>(formData: FormData): T {
  const formValues = Object.fromEntries(formData.entries()) as T
  return formValues
}

export default parseFormData
