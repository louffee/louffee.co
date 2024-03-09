import { isValidElement, type ReactElement } from 'react'

/**
 * A util function to check if the given parameter is a React element.
 *
 * @example
 * ```ts
 * const isElement = isReactElement(<MyComponent />)
 * ```
 */
function isReactElement<P extends object>(element: unknown): element is ReactElement<P> {
  return isValidElement(element)
}

export default isReactElement
