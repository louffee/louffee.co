import type { Meta, StoryObj } from '@storybook/react'

import Card, { type CardProps } from './card'

type Story = StoryObj<CardProps>

export const Overview: Story = {}

export default {
  title: 'Library/Card',
  component: Card,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <div className="p-6 w-[384px]">
        The platform was so easy to use. I found a great apartment near my university, and the whole process was smooth and stress-free.
      </div>
    ),
  },
} as Meta<CardProps>
