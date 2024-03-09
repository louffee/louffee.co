import { type Meta, type StoryObj } from '@storybook/react'

import AfloatBar, { type AfloatBarProps } from './afloat-bar'

type Story = StoryObj<AfloatBarProps>

export const Overview: Story = {
  argTypes: {
    asChild: {
      table: {
        disable: false,
      },
    },
  },
}

export default {
  title: 'Playground/AfloatBar',
  component: AfloatBar,
  tags: ['navigation', 'bar'],
  parameters: {
    docs: {
      disabled: true,
    },
    controls: {
      expanded: true,
    },
    previewTabs: {
      previewTabs: {
        'storybook/docs/panel': {
          index: -1,
        },
      },
    },
  },
  args: {
    asChild: false,
    children: 'Lorem Ipsum Dolor Sit Amet',
  },
  argTypes: {
    children: {
      type: 'string',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AfloatBarProps>
