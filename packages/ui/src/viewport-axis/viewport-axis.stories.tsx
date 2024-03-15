import type { Meta, StoryObj } from '@storybook/react'

import ViewportAxis, { type ViewportAxisProps } from './viewport-axis'

type Story = StoryObj<ViewportAxisProps>

export const Overview: Story = {}

export default {
  title: 'Library/ViewportAxis',
  component: ViewportAxis,
  args: {
    children: 'This is content of the component.',
  },
  argTypes: {
    position: {
      name: 'Position',
      description: 'The position of the viewport axis.',
      control: {
        type: 'select',
      },
      options: ['top-center', 'bottom-center'],
    },
  },
} as Meta<ViewportAxisProps>
