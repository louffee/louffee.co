import type { ReactElement } from 'react'

import isReactElement from './is-react-element'

/**
 * This util function checks whether the given parameter is a React composite
 * element, *e.g.*, a class component or a function component.
 *
 * @example
 * ```ts
 * const isComposite = isCompositeElement(<MyComponent />)
 * ```
 */
function isCompositeElement<P extends object>(element: unknown): element is ReactElement<P> {
  return isReactElement(element) && typeof element?.type === 'function'
}

export default isCompositeElement
