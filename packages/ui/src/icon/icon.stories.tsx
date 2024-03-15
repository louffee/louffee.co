import type { Meta, StoryObj } from '@storybook/react'

import Icon, { type IconProps } from './icon'
import icons from './icons'

type Story = StoryObj<IconProps>

export const Overview: Story = {}

/**
 * The names of the icons that are available in the `icons` object.
 */
const ICON_NAMES = Object.keys(icons)

export default {
  title: 'Library/Icon',
  component: Icon,
  args: {
    name: 'Accessibility',
    size: 64,
    color: '#000000',
  },
  argTypes: {
    name: {
      name: 'Icon name',
      description: 'The name of the icon to display.\n\n**Prop name:** `name`',
      control: {
        type: 'select',
      },
      options: ICON_NAMES,
    },
    size: {
      name: 'Icon size',
      description:
        'The number that sets the width and height of the icon.\n\nThe max value of 512 size is demonstrative, there is no virtual limitation.\n\n**Prop name:** `size`',
      control: {
        type: 'range',
        min: 16,
        max: 512,
      },
    },
    color: {
      name: 'Icon color',
      description: 'The color of the icon.\n\n**Prop name:** `color`',
      control: {
        type: 'color',
      },
    },
  },
} as Meta<IconProps>
