import type { Meta, StoryObj } from '@storybook/react'

import FooterLink, { type FooterLinkProps } from './footer-link'

type Story = StoryObj<typeof FooterLink>

export const Overview: Story = {
  args: {
    children: 'Lorem ipsum',
    href: '#',
  },
}

export default {
  title: 'Playground/FooterLink',
  component: FooterLink,
  subcomponents: {
    FooterLink,
  },
  tags: ['navigation', 'footer', 'anchor'],
  argTypes: {
    children: {
      description: 'The label of the link rendered inside the footer section of the page.\n\n**Prop name:** `children`',
      control: {
        type: null,
      },
    },
    href: {
      description: 'The URL or pathname to which the link points.\n\n**Prop name:** `href`',
      control: {
        type: null,
      },
    },
  },
} as Meta<FooterLinkProps>
