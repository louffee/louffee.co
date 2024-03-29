import type { JSX, SVGAttributes } from 'react'

import merge from '../engine/merge'

type SVGSVGElementAttributes = SVGAttributes<SVGElement>
type SVGSVGElementAttributesExceptSome = Omit<SVGSVGElementAttributes, 'xmlns' | 'children' | 'fill'>

export interface SpinnerProps extends SVGSVGElementAttributesExceptSome {
  /**
   * @ignore
   */
  children?: never
}

/**
 * This is a React Component which is used to show a loading spinner on the
 * screen while the content is being loaded.
 *
 * @props {@link SpinnerProps}
 */
function Spinner({
  className,
  role = 'img',
  'aria-label': ariaLabel = 'Loading',
  viewBox = '0 0 24 24',
  ...props
}: SpinnerProps): JSX.Element {
  return (
    <svg
      {...props}
      role={role}
      xmlns="http://www.w3.org/2000/svg"
      className={merge('animate-spin -ml-1 mr-3 h-5 w-5 text-white', className)}
      fill="none"
      viewBox={viewBox}
      aria-label={ariaLabel}>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default Spinner
