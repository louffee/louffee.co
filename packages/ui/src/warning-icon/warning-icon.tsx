import { type JSX } from 'react'

import merge from '../engine/merge'
import Icon from '../icon/icon'
import SemanticIcon, { type SemanticIconProps } from '../semantic-icon/semantic-icon'

type PickedSemanticIconProps = Omit<SemanticIconProps, 'children'>

export interface WarningIconProps extends PickedSemanticIconProps {
  /**
   * @ignore The children of the `WarningIcon` component are not allowed.
   */
  children?: never
}

/**
 * The `WarningIcon` component is a semantic component that represents the icon
 * for the warning state.
 *
 * @props {@link WarningIconProps}
 */
function WarningIcon({ children: _children, className, ...props }: WarningIconProps): JSX.Element {
  return (
    <SemanticIcon {...props} className={merge('bg-zinc-200/30 text-yellow-600 dark:text-yellow-400', className)}>
      <Icon name="ExclamationTriangle" />
    </SemanticIcon>
  )
}

export default WarningIcon
