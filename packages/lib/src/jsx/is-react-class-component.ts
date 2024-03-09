import type { ComponentClass } from 'react'

/**
 * A util function to check if the given parameter is a React class component.
 *
 * @example
 * ```ts
 * const isClassComponent = isReactClassComponent(MyComponent)
 * ```
 */
function isReactClassComponent<P extends object>(component: unknown): component is ComponentClass<P> {
  return typeof component === 'function' && !!component?.prototype?.isReactComponent
}

export default isReactClassComponent
