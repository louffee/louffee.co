import type { Meta, StoryObj } from '@storybook/react'

import InfoIcon, { type InfoIconProps } from './info-icon'

type Story = StoryObj<InfoIconProps>

export const Overview: Story = {}

export const WithTypography: Story = {
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <p>This text is demonstrative and not part of this component.</p>
      </div>
    ),
  ],
}
WithTypography.storyName = '+ Typography'

export default {
  title: 'Library/InfoIcon',
  component: InfoIcon,
  args: {
    size: 'md',
  },
  argTypes: {
    height: {
      type: 'number',
      name: 'Height',
      description: 'The height of the inner icon. This does not modify the size of the container.\n\n**Prop name:** `height`',
    },
    width: {
      type: 'number',
      name: 'Width',
      description: 'The width of the inner icon. This does not modify the size of the container.\n\n**Prop name:** `width`',
    },
  },
} as Meta<InfoIconProps>
