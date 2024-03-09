import type { Meta, StoryObj } from '@storybook/react'

import Label from '../label/label'

import Checkbox, { type CheckboxProps } from './checkbox'

type Story = StoryObj<CheckboxProps>

export const Overview: Story = {}

export const WithLabel: Story = {
  args: {
    name: 'checkbox',
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, { args: { name } }) => (
      <form>
        <div className="flex items-center gap-2">
          {Story()}
          <Label htmlFor={name}>Lorem ipsum</Label>
        </div>
      </form>
    ),
  ],
}
WithLabel.storyName = '+ Label'

export default {
  title: 'Playground/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      name: 'Checked',
      description: 'Whether the checkbox is checked or not.\n\n**Prop name:** `checked`',
      control: 'boolean',
    },
    disabled: {
      name: 'Disabled',
      description: 'Whether the checkbox is disabled or not.\n\n**Prop name:** `disabled`',
      control: 'boolean',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxProps>
