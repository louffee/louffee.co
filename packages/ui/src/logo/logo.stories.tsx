import type { Meta, StoryObj } from '@storybook/react'

import Logo, { type LogoProps } from './logo'

type Story = StoryObj<LogoProps>

export const Overview: Story = {
  args: {
    height: 48,
    width: 48,
  },
}

export default {
  title: 'Brand/Logo',
  component: Logo,
  argTypes: {
    height: {
      name: 'Height',
      description: 'The height of the logo\n\n**Prop name:** `height`',
      control: {
        type: 'range',
        min: 24,
        max: 96,
        step: 1,
      },
    },
    width: {
      name: 'Width',
      description: 'The width of the logo\n\n**Prop name:** `width`',
      control: {
        type: 'range',
        min: 24,
        max: 96,
        step: 1,
      },
    },
  },
} as Meta<LogoProps>
