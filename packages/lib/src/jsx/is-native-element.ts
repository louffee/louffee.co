import { type JSX } from 'react'

import isReactElement from './is-react-element'

/**
 * A util function to check if the given parameter is a native HTML element
 * type, *e.g.*, `div`, `span`, `input`, etc.
 *
 * @example
 * ```ts
 * const isNative = isNativeElement('div')
 * ```
 */
function isNativeElement(element: unknown): element is keyof JSX.IntrinsicElements {
  return isReactElement(element) && typeof element?.type === 'string'
}

export default isNativeElement
