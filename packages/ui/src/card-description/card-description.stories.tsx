import type { Meta, StoryObj } from '@storybook/react'

import CardDescription, { type CardDescriptionProps } from './card-description'

type Story = StoryObj<CardDescriptionProps>

export const Overview: Story = {}

export default {
  title: 'Library/CardDescription',
  component: CardDescription,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'This is a styled paragraph which semantically renders the card description.',
  },
} as Meta<CardDescriptionProps>
