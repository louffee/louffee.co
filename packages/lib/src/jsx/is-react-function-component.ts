import type { ReactNode } from 'react'

/**
 * A util function to check if the given parameter is a React function
 * component.
 *
 * @example
 * ```ts
 * const isFunctionComponent = isReactFunctionComponent(MyComponent)
 * ```
 */
function isReactFunctionComponent<P>(component: unknown): component is (props: P) => ReactNode {
  return typeof component === 'function' && String(component).includes('return React.createElement')
}

export default isReactFunctionComponent
