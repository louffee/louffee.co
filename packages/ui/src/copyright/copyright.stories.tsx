import type { Meta, StoryObj } from '@storybook/react'

import Copyright, { type CopyrightProps } from './copyright'

type Story = StoryObj<typeof Copyright>

export const Overview: Story = {
  args: {
    children: `©️ Acme Inc. ${new Date().getFullYear()}. All rights reserved.`,
  },
}

export default {
  title: 'Library/Copyright',
  component: Copyright,
  argTypes: {
    children: {
      description: 'The text to be displayed in the copyright notice.\n\n**Prop name:** `children`',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<CopyrightProps>
