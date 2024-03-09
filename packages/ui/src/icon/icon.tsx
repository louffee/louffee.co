'use client'

import { SVGAttributes, forwardRef } from 'react'

import merge from '../engine/merge'

import icons, { type IconName } from './icons'

/**
 * The type of the reference that is forwarded to the underlying SVG element.
 */
export type IconForwardedReferenceType = SVGSVGElement

type SVGSVGElementAttributes = SVGAttributes<SVGSVGElement>
type SVGSVGElementAttributesExceptSome = Omit<SVGSVGElementAttributes, 'children'>

export { IconName }

export interface IconProps extends SVGSVGElementAttributesExceptSome {
  /**
   * The name of the icon to render. This is a string literal which corresponds
   * to the icon SVG expression in the {@link icons | `icons`} object that is
   * converted to a React component and further rendered.
   *
   * @see {@link icons}
   */
  name: IconName
}

/**
 * The component that renders the icon identified by the given `name` prop.
 *
 * @example
 * ```tsx
 * <Icon name="ExclamationTriangle" width={24} height={24} />
 * ```
 *
 * @props {@link IconProps}
 */
const Icon = forwardRef<IconForwardedReferenceType, IconProps>(({ name, width, height, className, ...props }, ref) => {
  const Icon = icons[name]

  if (!Icon) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        `The string literal "${name}" does not correspond to any of the icons in the "icons" object. See your implementation of the <Icon name={${name}} /> component. So to avoid any further issues, the Icon component will return null in the JSX expression.`,
      )
    }
    return null
  }

  return <Icon width={width} height={height} className={merge(className)} ref={ref} {...props} />
})

Icon.displayName = 'Icon'

export default Icon
