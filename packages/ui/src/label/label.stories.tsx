import type { Meta, StoryObj } from '@storybook/react'

import Label, { type LabelProps } from './label'

type Story = StoryObj<LabelProps>

export const Overview: Story = {}

export default {
  title: 'Playground/Label',
  component: Label,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    children: {
      name: 'Label text',
      description: 'The content of the label.\n\n**Prop name:** `children`',
      control: {
        type: 'text',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<LabelProps>
