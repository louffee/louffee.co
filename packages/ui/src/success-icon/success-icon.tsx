import { type JSX } from 'react'

import merge from '../engine/merge'
import Icon from '../icon/icon'
import SemanticIcon, { type SemanticIconProps } from '../semantic-icon/semantic-icon'

type PickedSemanticIconProps = Omit<SemanticIconProps, 'children'>

export interface SuccessIconProps extends PickedSemanticIconProps {
  /**
   * @ignore The children of the `SuccessIcon` component are not allowed.
   */
  children?: never
}

/**
 * The `SuccessIcon` component is a semantic component that represents the icon
 * for the successful state. For instance, after the user has successfully put
 * in the correct password.
 *
 * @props {@link SuccessIconProps}
 */
function SuccessIcon({ children: _children, className, ...props }: SuccessIconProps): JSX.Element {
  return (
    <SemanticIcon {...props} className={merge('bg-zinc-200/30 text-emerald-600 dark:text-emerald-400', className)}>
      <Icon name="Check" />
    </SemanticIcon>
  )
}

export default SuccessIcon
