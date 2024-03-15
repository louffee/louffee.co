import removeSuffix from '@louffee/lib/remove-suffix'
import type SuppressSuffix from '@louffee/lib/suppress-suffix'

import * as Radix$Icons from '@radix-ui/react-icons'

type Radix$TypeofIcons = typeof Radix$Icons
type Radix$IconName = keyof Radix$TypeofIcons

/**
 * The `IconName` type is a string literal that represents the name of an icon.
 */
export type IconName = SuppressSuffix<Radix$IconName, 'Icon'>

/**
 * The object which defines the React components for each of the icons that are
 * available in the `@radix-ui/react-icons` package.
 */
const icons = Object.entries(Radix$Icons).reduce<Record<IconName, Radix$TypeofIcons[`${IconName}Icon`]>>(
  (acc, [key, value]) => {
    acc[removeSuffix(key, 'Icon') as IconName] = value
    return acc
  },
  {} as Record<IconName, Radix$TypeofIcons[`${IconName}Icon`]>,
)

export default icons
