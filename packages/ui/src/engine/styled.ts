import { cva, type VariantProps } from 'class-variance-authority'
import type { ClassValue as Clsx$ClassValue } from 'clsx'

import type { CVA$ClassProps, CVA$Config } from './_/class-variance-authority-copy-index-dts'

/**
 * The configuration object passed to the `styled` function. This is object in
 * which the class names are defined in the `base` property and the variants
 * free-formed in the rest of the object under the `variants` prop.
 */
export type StyledConfiguration<T> = CVA$Config<T> & {
  /**
   * The base class names to be used as the foundation for the styled factory.
   *
   * @example
   * ```ts
   * styled({ base: 'h-10' });
   * ```
   */
  base: Clsx$ClassValue
}

/**
 * The return type of the `styled` function. This is a function that accepts an
 * object of props predefined when the styled was defined, returning a string
 * which is the conjunction of the base and variant class names according to the
 * {@link CVA$ClassProps | props} passed. Note that the props are optional.
 */
export type StyledReturnType<T> = (props?: CVA$ClassProps<T>) => string

/**
 * The `styled` function is a factory function that returns a function that
 * accepts an object of props predefined when the styled was defined, returning
 * a string which is the conjunction of the base and variant class names
 * according to the {@link CVA$ClassProps | props} passed.
 *
 * @example
 * ```tsx
 * const squareStyle = styled({
 *   base: 'h-10 w-10',
 *   variants: {
 *     color: {
 *       red: 'bg-red-500',
 *       blue: 'bg-blue-500',
 *       green: 'bg-green-500',
 *     },
 *   },
 * })
 *
 * function Square({ color }: SquareProps): JSX.Element {
 *   return (
 *     <div className={squareStyle({ color })} />
 *   )
 * }
 * ```
 */
function styled<T>({ base, ...config }: StyledConfiguration<T>): StyledReturnType<T> {
  const coercedConfig = config as unknown as CVA$Config<T> | undefined
  return cva(base, coercedConfig)
}

export type { VariantProps as StyledVariationProps }

export default styled
