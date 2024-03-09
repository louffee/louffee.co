import { type JSX } from 'react'

import merge from '../engine/merge'
import Icon from '../icon/icon'
import SemanticIcon, { type SemanticIconProps } from '../semantic-icon/semantic-icon'

type PickedSemanticIconProps = Omit<SemanticIconProps, 'children'>

export interface InfoIconProps extends PickedSemanticIconProps {
  /**
   * @ignore The children of the `InfoIcon` component are not allowed.
   */
  children?: never
}

/**
 * The `InfoIcon` component is a semantic component that represents the icon
 * for the informational state.
 *
 * @props {@link InfoIconProps}
 */
function InfoIcon({ children: _children, className, ...props }: InfoIconProps): JSX.Element {
  return (
    <SemanticIcon {...props} className={merge('bg-zinc-200/30 text-blue-600 dark:text-blue-400', className)}>
      <Icon name="MagnifyingGlass" />
    </SemanticIcon>
  )
}

export default InfoIcon
