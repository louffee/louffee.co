import type { Meta, StoryObj } from '@storybook/react'

import Button, { type ButtonProps } from './button'

type Story = StoryObj<ButtonProps>

export const Overview: Story = {
  argTypes: {
    asChild: {
      table: {
        disable: false,
      },
    },
  },
}

export const Variants: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: false,
      },
    },
  },
}
Variants.storyName = '+ Variants'

export const Sizes: Story = {
  args: {
    size: 'md',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
}
Sizes.storyName = '+ Sizes'

export default {
  title: 'Library/Button',
  component: Button,
  tags: ['action', 'call-to-action', 'button'],
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
    children: 'Button Label',
    asChild: false,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    children: {
      name: 'Label',
      description:
        'The label or content of the button. This can be a string, a JSX element, or an instance of the Icon component.\n\n**Prop name:** `children`',
      type: {
        name: 'string',
        required: true,
      },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string | JSX.Element | ReactElement<IconProps>',
        },
      },
    },
    asChild: {
      description:
        'The boolean which defines if the button will forward its properties to the slottable child passed in via the `children` prop.\n\n**Prop name:** `asChild`',
      control: {
        type: 'check',
      },
      type: {
        name: 'boolean',
      },
      table: {
        type: {
          summary: 'asChild: boolean',
        },
      },
    },
    variant: {
      name: 'Variant',
      description: 'The variant of the button which will change its appearance.\n\n**Prop name:** `variant`',
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'destructive', 'outlined', 'ghost', 'link'],
      table: {
        type: {
          summary: '"primary" | "secondary" | "destructive" | "outlined" | "ghost" | "link"',
        },
      },
    },
    size: {
      name: 'Size',
      description: 'The size of the button. This will modify the padding, height, and font size of the button.\n\n**Prop name:** `size`',
      control: {
        type: 'radio',
        labels: {
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          icon: 'Icon',
        },
      },
      options: ['sm', 'md', 'lg', 'icon'],
      table: {
        type: {
          summary: '"sm" | "md" | "lg" | "icon"',
        },
      },
    },
  },
} as Meta<ButtonProps>
