import type { Meta, StoryObj } from '@storybook/react'

import icons from '../icon/icons'

import IconButton, { type IconButtonProps } from './icon-button'

const iconNames = Object.keys(icons)

type Story = StoryObj<IconButtonProps>

export const Overview: Story = {
  argTypes: {
    asChild: {
      table: {
        disable: false,
      },
    },
  },
}

export const Variants: Story = {
  args: {
    variant: 'primary',
    asChild: false,
  },
  argTypes: {
    asChild: {
      table: {
        disable: false,
      },
    },
  },
}
Variants.storyName = '+ Variants'

export default {
  title: 'Library/IconButton',
  component: IconButton,
  tags: ['action', 'call-to-action', 'button', 'icon'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    icon: 'Accessibility',
    asChild: false,
    variant: 'primary',
  },
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'The icon to be rendered inside the icon button.\n\n**Prop name:** `icon`',
      type: {
        name: 'string',
        required: true,
      },
      control: {
        type: 'select',
      },
      options: iconNames,
      table: {
        type: {
          summary: 'IconName',
        },
      },
    },
    asChild: {
      description:
        'The boolean which defines if the button will forward its properties to the slottable child passed in via the `children` prop.\n\n**Prop name:** `asChild`',
      control: {
        type: 'check',
      },
      type: {
        name: 'boolean',
      },
      table: {
        type: {
          summary: 'asChild: boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the button which will change its appearance.\n\n**Prop name:** `variant`',
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'destructive', 'outlined', 'ghost', 'link'],
      table: {
        type: {
          summary: '"primary" | "secondary" | "destructive" | "outlined" | "ghost" | "link"',
        },
        defaultValue: {
          summary: '"primary"',
        },
      },
    },
  },
} as Meta<IconButtonProps>
