import { useState, type JSX } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import TextField, { type TextFieldProps } from './text-field'

type Story = StoryObj<TextFieldProps>

export const Overview: Story = {
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['form-field', 'input'],
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type in your email address',
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
}
WithPlaceholder.storyName = '+ Placeholder'

function ControlledTextField({ value: valueArg = '', onInputChange, ...args }: TextFieldProps): JSX.Element {
  const [value, setValue] = useState(valueArg)

  function handleInputChange(value: string) {
    setValue(value)
    onInputChange?.(value)
  }

  return <TextField {...args} value={value} onInputChange={handleInputChange} />
}

export const WithFormat: Story = {
  args: {
    format(value) {
      const inputValue = value.replace(/[^\d.-]/g, '')

      const trimmedInputValue = inputValue.trim()

      if (trimmedInputValue.length === 0) {
        return '£'
      }

      return `£${trimmedInputValue}`
    },
    parse(value) {
      return value.replace(/[^\d.-]/g, '')
    },
    onBlur(event) {
      if (event?.target) {
        const inputElement = event.target as HTMLInputElement

        const inputValue = inputElement.value
          .replace('£', '')
          .replace(/[^\[0-9].-]g/, '')
          .trim()

        const formattedValue = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(inputValue as unknown as number)

        inputElement.value = formattedValue
      }
    },
  },
  argTypes: {
    parse: {
      table: {
        disable: true,
      },
    },
    format: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
  async play({ canvasElement }) {
    const inputElement = canvasElement.querySelector('input') as HTMLInputElement

    const inputValue = '100' as const
    await userEvent.type(inputElement, inputValue, {
      delay: 500,
    })

    await userEvent.click(canvasElement, {
      delay: 50,
    })
    // NOTE: ^^ We click away to trigger the `onBlur` event so the value is
    //          formatted and displayed as currency.
  },
  render(args) {
    return <ControlledTextField {...args} />
  },
}
WithFormat.storyName = '+ Format'

export const Interaction: Story = {
  args: {
    placeholder: 'Type in your email address',
    name: 'emailAddress',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
  async play({ canvasElement, args: { placeholder } }) {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByPlaceholderText(placeholder ?? '')

    const emailAddress = 'storybook@louffee.co' as const
    await userEvent.type(emailInput, emailAddress, {
      delay: 50,
    })

    await expect(canvas.getByDisplayValue(emailAddress)).toBeInTheDocument()
  },
}
Interaction.storyName = '+ Interaction'

export default {
  title: 'Library/TextField',
  component: TextField,
  args: {
    name: 'textField',
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      name: 'Placeholder',
      description: 'The text slightly visible in the text field when it is empty.\n\n**Prop name:** `placeholder`',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TextFieldProps>
