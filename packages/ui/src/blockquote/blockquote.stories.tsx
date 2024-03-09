import type { Meta, StoryObj } from '@storybook/react'

import Blockquote, { type BlockquoteProps } from './blockquote'

type Story = StoryObj<BlockquoteProps>

export const Overview: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo inventore non doloribus odit excepturi consectetur autem! Dolores laudantium laboriosam asperiores magni sunt aut non odio nihil? Reiciendis non officiis inventore?',
  },
}

export default {
  title: 'Playground/Blockquote',
  component: Blockquote,
  argTypes: {
    children: {
      name: 'Quote text',
      description: 'The text of the quote.\n\n**Prop name:** `children`',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<BlockquoteProps>
