import { type Meta, type StoryObj } from '@storybook/react'

import Input, { type InputProps } from './input'

type Story = StoryObj<InputProps>

export const Overview: Story = {
  argTypes: {},
}

export default {
  title: 'Playground/Input',
  component: Input,
  tags: ['action', 'input', 'form', 'form-field'],
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
    placeholder: 'Placeholder text',
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder text',
      description: 'The placeholder text to display when the input is empty.\n\n**Prop name:** `placeholder`.',
      type: {
        name: 'string',
        required: true,
      },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      name: 'Input Value',
      description:
        'The value of the input. When this value is changed, the `onChange` event handler is triggered.\n\n**Prop name:** `value`.',
      type: {
        name: 'string',
        required: true,
      },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<InputProps>
