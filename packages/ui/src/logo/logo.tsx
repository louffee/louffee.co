import { forwardRef, type SVGAttributes } from 'react'

import merge from '../engine/merge'

export type LogoForwardedReferenceType = SVGSVGElement

type SVGSVGElementAttributes = SVGAttributes<SVGSVGElement>
type SVGSVGElementAttributesExceptSome = Omit<SVGSVGElementAttributes, 'xmlns' | 'children'>

export interface LogoProps extends SVGSVGElementAttributesExceptSome {}

/**
 * The Logo component is used to display the Louffee logo.
 *
 * @props {@link LogoProps}
 */
const Logo = forwardRef<LogoForwardedReferenceType, LogoProps>(
  (
    {
      className,
      fill = 'none',
      height = 48,
      width = 48,
      viewBox = '0 0 48 48',
      role = 'img',
      'aria-label': ariaLabel = 'Louffee Logo',
      ...props
    },
    ref,
  ) => (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      role={role}
      aria-label={ariaLabel}
      className={merge('text-rose-700 dark:text-zinc-50', className)}>
      <path
        d="M21.6 39.5077C29.0431 39.5077 35.0769 33.4739 35.0769 26.0308C35.0769 18.5877 29.0431 12.5538 21.6 12.5538C14.1569 12.5538 8.12308 18.5877 8.12308 26.0308C8.12308 33.4739 14.1569 39.5077 21.6 39.5077Z"
        stroke="currentColor"
        strokeWidth={4}
      />
      <path d="M8.50011 11.0949L8.12286 26.6026" stroke="currentColor" strokeWidth={4} />
      <path d="M21.9376 5.38553L42.826 26.2741" stroke="currentColor" strokeWidth={4} />
      <path d="M21.7846 39.5077H35.8154" stroke="currentColor" strokeWidth={4} />
    </svg>
  ),
)

Logo.displayName = 'Logo'

export default Logo
