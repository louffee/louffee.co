import { type Meta, type StoryObj } from '@storybook/react'

import Heading, { type HeadingProps } from './heading'

type Story = StoryObj<HeadingProps>

export const Overview: Story = {}

export default {
  title: 'Playground/Heading',
  component: Heading,
  args: {
    variant: 'h1',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description:
        'The variant of the heading. It corresponds to the level of the classic HTML heading hierarchy, *i.e.*, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. It is also used to define the size and specific styles of the HTML element.\n\n**Prop name:** `variant`.',
      type: 'string',
      control: {
        type: 'select',
        labels: {
          h1: 'Heading Level 1 (h1)',
          h2: 'Heading Level 2 (h2)',
          h3: 'Heading Level 3 (h3)',
          h4: 'Heading Level 4 (h4)',
          h5: 'Heading Level 5 (h5)',
          h6: 'Heading Level 6 (h6)',
        },
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: {
      name: 'Text',
      description: 'The text to be displayed within the heading.\n\n**Prop name:** `children`.',
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<HeadingProps>
