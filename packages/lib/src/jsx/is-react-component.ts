import type { ComponentClass, ReactNode } from 'react'

import isReactClassComponent from './is-react-class-component'
import isReactFunctionComponent from './is-react-function-component'

/**
 * A util function to check if the given parameter is either a React class
 * component or a React function component.
 *
 * @example
 * ```ts
 * const isComponent = isReactComponent(MyComponent)
 * ```
 */
function isReactComponent<P extends object>(component: unknown): component is ComponentClass<P> | ((props: P) => ReactNode) {
  return isReactClassComponent(component) || isReactFunctionComponent(component)
}

export default isReactComponent
