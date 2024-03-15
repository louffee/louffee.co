'use client'

import { forwardRef, type SVGAttributes } from 'react'

import merge from '../engine/merge'

import icons, { type IconName } from './icons'

/**
 * The type of the reference that is forwarded to the underlying SVG element.
 */
export type IconForwardedReferenceType = SVGSVGElement

type SVGSVGElementAttributes = SVGAttributes<SVGSVGElement>
type SVGSVGElementAttributesExceptSome = Omit<SVGSVGElementAttributes, 'children'>

export type { IconName }

export interface IconProps extends SVGSVGElementAttributesExceptSome {
  /**
   * The name of the icon to render. This is a string literal which corresponds
   * to the icon SVG expression in the {@link icons | `icons`} object that is
   * converted to a React component and further rendered.
   *
   * @see {@link icons}
   */
  name: IconName
  /**
   * The size is a number that represents the width and height of the icon. If
   * this value is set to `24`, the icon will be 24x24 pixels in size.
   *
   * If `height` and/or `width` are set, they will override the `size` prop. It
   * is not recommended to use the `size` prop in combination with `height` and
   * `width` props.
   */
  size?: number
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
const Icon = forwardRef<IconForwardedReferenceType, IconProps>(({ name, size, width, height, className, ...props }, ref) => {
  const Icon = icons[name]

  const iconHeight = height || size
  const iconWidth = width || size

  if (!Icon) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        `The string literal "${name}" does not correspond to any of the icons in the "icons" object. See your implementation of the <Icon name={${name}} /> component. So to avoid any further issues, the Icon component will return null in the JSX expression.`,
      )
    }
    return null
  }

  if (size) {
    if (height) {
      console.warn(
        `The "size" prop is set to ${size} and the "height" prop is set to ${height}. The "height" prop will override the "size" prop. It is not recommended to use the "size" prop in combination with "height" and "width" props. Please see the implementation of the <Icon name="${name}" size={${size}} height={${height}} /> component.`,
      )
    }
    if (width) {
      console.warn(
        `The "size" prop is set to ${size} and the "width" prop is set to ${width}. The "width" prop will override the "size" prop. It is not recommended to use the "size" prop in combination with "width" and "width" props. Please see the implementation of the <Icon name="${name}" size={${size}} width={${width}} /> component.`,
      )
    }
  }

  return <Icon width={iconWidth} height={iconHeight} className={merge(className)} ref={ref} {...props} />
})

Icon.displayName = 'Icon'

export default Icon
