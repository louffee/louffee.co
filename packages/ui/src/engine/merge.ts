import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * The merge function is a utility function that merges multiple class names
 * together and returns a single string of class names.
 *
 * **Note:** It is a wrapper around the {@link clsx | `clsx()`} and
 * {@link twMerge | `twMerge()`} functions. See the documentation for more
 * information, [clsx](https://www.npmjs.com/package/clsx) and
 * [tailwind-merge](https://www.npmjs.com/package/tailwind-merge).
 *
 * @example
 * ```ts
 * const className = merge('text-red-500', 'bg-blue-500', 'p-4');
 * // 'text-red-500 bg-blue-500 p-4'
 * ```
 *
 * @see https://www.npmjs.com/package/clsx
 * @see https://www.npmjs.com/package/tailwind-merge
 */
function merge(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export default merge
