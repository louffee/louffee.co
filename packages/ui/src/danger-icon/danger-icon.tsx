import { type JSX } from 'react'

import merge from '../engine/merge'
import Icon from '../icon/icon'
import SemanticIcon, { type SemanticIconProps } from '../semantic-icon/semantic-icon'

type PickedSemanticIconProps = Omit<SemanticIconProps, 'children'>

export interface DangerIconProps extends PickedSemanticIconProps {
  /**
   * @ignore The children of the `DangerIcon` component are not allowed.
   */
  children?: never
}

/**
 * The `DangerIcon` component is a semantic component that represents the icon
 * for the danger state.
 *
 * @props {@link DangerIconProps}
 */
function DangerIcon({ children: _children, className, ...props }: DangerIconProps): JSX.Element {
  return (
    <SemanticIcon {...props} className={merge('bg-zinc-200/30 text-red-600 dark:text-red-400', className)}>
      <Icon name="ExclamationTriangle" />
    </SemanticIcon>
  )
}

export default DangerIcon
