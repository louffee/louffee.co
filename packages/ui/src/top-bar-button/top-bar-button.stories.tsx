import type { Meta, StoryObj } from '@storybook/react'

import TopBarButton, { type TopBarButtonProps } from './top-bar-button'

type Story = StoryObj<TopBarButtonProps>

export const Overview: Story = {
  args: {
    children: 'About',
    href: '/?path=/story/playground-topbarbutton--overview',
    // NOTE: ^^ This is a hack to make the link work in Storybook. It will point
    //          to the story's URL in the Storybook UI.
  },
}

export default {
  title: 'Library/TopBarButton',
  component: TopBarButton,
  args: {
    size: 'md',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: {
        type: 'text',
      },
      description: 'The text to display inside the element.',
    },
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    asChild: {
      control: {
        type: null,
      },
    },
    size: {
      name: 'Size',
      description:
        'The size of the button meant to be rendered inside the TopBar. This prop is the same as the `size` prop of the `Button` component.\n\n**Prop name:** `size`',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'icon'],
    },
  },
} as Meta<TopBarButtonProps>
