import { Fragment } from 'react/jsx-runtime'

import type { Meta, StoryObj } from '@storybook/react'

import FooterLink from '../footer-link/footer-link'
import FooterNavigation, { type FooterNavigationProps } from './footer-navigation'

type Story = StoryObj<typeof FooterNavigation>

export const Overview: Story = {
  args: {
    children: (
      <Fragment>
        <FooterLink href="#">Lorem</FooterLink>
        <FooterLink href="#">Ipsum</FooterLink>
        <FooterLink href="#">Sit</FooterLink>
        <FooterLink href="#">Dolor</FooterLink>
      </Fragment>
    ),
  },
}

export default {
  title: 'Playground/FooterNavigation',
  component: FooterNavigation,
  subcomponents: {
    FooterLink,
  },
  tags: ['navigation', 'footer'],
  argTypes: {
    children: {
      description: 'The links for the footer navigation.\n\n**Prop name:** `children`',
      control: {
        type: null,
      },
    },
  },
} as Meta<FooterNavigationProps>
