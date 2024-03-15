import type { Meta, StoryObj } from '@storybook/react'

import Spinner, { type SpinnerProps } from './spinner'

type Story = StoryObj<SpinnerProps>

export const Overview: Story = {}

export default {
  title: 'Library/Spinner',
  component: Spinner,
  args: {
    className: 'text-primary',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<SpinnerProps>
