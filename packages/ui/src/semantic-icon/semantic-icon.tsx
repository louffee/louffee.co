import { cloneElement, type HTMLAttributes, type JSX, type ReactElement, type SVGAttributes } from 'react'

import merge from '../engine/merge'
import styled, { type StyledVariationProps } from '../engine/styled'
import { type IconProps } from '../icon/icon'

/**
 * @internal The variation styles for the `SemanticIcon` component.
 */
const semanticIconStyles = styled({
  base: 'flex items-center justify-center',
  variants: {
    size: {
      sm: 'w-5 h-5 rounded-[1px]',
      md: 'w-8 h-8 rounded-sm p-[6px]',
      lg: 'w-10 h-10 rounded-sm p-2',
      xl: 'w-12 h-12 rounded-md p-2',
    },
  },
})

/**
 * @internal The attributes for the root HTML element, whichever it may be.
 */
type HTMLElementAttributes = Omit<HTMLAttributes<HTMLElement>, 'children'>

/**
 * @internal The attributes for the `svg` element.
 */
type SVGSVGAttributes = SVGAttributes<SVGSVGElement>

/**
 * @internal The attributes for the `svg` element that are picked from the
 *           `SVGSVGAttributes` type.
 */
type PickedSVGSVGAttributes = Pick<SVGSVGAttributes, 'viewBox' | 'height' | 'width'>

/**
 * The string literal type that represents the semantic icon names.
 */
export type SemanticIconSize = NonNullable<StyledVariationProps<typeof semanticIconStyles>['size']>

/**
 * @internal The constant which defines the default height and width of the SVG
 *           based on the `size` prop. This value is calculated as the number of
 *           pixels in the class names minus 4. For instance, as the size `X`
 *           applies the `w-5` and `h-5` class names, and these classes apply
 *           the height and width of 20 pixels, the default height and width of
 *           the SVG will be 16 pixels.
 */
const ROOT_SVG_SIZES: {
  [_ in SemanticIconSize]: number
} = {
  sm: 16,
  md: 28,
  lg: 36,
  xl: 44,
} as const

export interface SemanticIconProps extends HTMLElementAttributes, PickedSVGSVGAttributes {
  /**
   * The size of the icon. This injects the value passed via class names. If
   * custom values of height and width are needed, please use the `className`
   * prop to override the default values.
   *
   * If you require to override the height and/or width of the icon, please use
   * the `height` and `width` which will be injected into the SVG element.
   *
   * The size of the icon is calculated based on the number of pixels in the
   * class names minus 4. For instance, as the size `X` applies the `w-5` and
   * `h-5` class names, and these classes apply the height and width of 20
   * pixels, the default height and width of the SVG will be 16 pixels.
   *
   * @see {@link SemanticIconSize}
   *
   * @default 'md'
   */
  size?: SemanticIconSize
  /**
   * The children of the `SemanticIcon` component. This value must be only one
   * which is the JSX expression to render an `Icon` component.
   *
   * @see {@link IconProps}
   */
  children: ReactElement<IconProps>
}

/**
 * The `SemanticIcon` component is a semantic component that wraps an `Icon`
 * component (passed via the {@link SemanticIconProps.children | `children`}
 * prop) inside a `div` element to provide the former with a semantic meaning
 * and visual feedback to the end user.
 *
 * Also, by default, the `aria-hidden` attribute is set to `true` to hide the
 * icon from the accessibility tree.
 *
 * @props {@link SemanticIconProps}
 */
function SemanticIcon({
  children,
  size = 'md',
  className,
  'aria-hidden': ariaHidden = 'true',
  height: heightProp,
  width: widthProp,
  ...props
}: SemanticIconProps): JSX.Element {
  const height = heightProp ?? ROOT_SVG_SIZES[size]
  const width = widthProp ?? ROOT_SVG_SIZES[size]

  return (
    <div {...props} className={merge(semanticIconStyles({ size }), className)} aria-hidden={ariaHidden}>
      {cloneElement(children, { height, width })}
    </div>
  )
}

export default SemanticIcon
