import { Fragment } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Copyright from '../copyright/copyright'
import FooterLink from '../footer-link/footer-link'
import FooterNavigation from '../footer-navigation/footer-navigation'

import Footer, { type FooterProps } from './footer'

type Story = StoryObj<typeof FooterNavigation>

const CURRENT_YEAR = new Date().getFullYear()

export const Overview: Story = {
  args: {
    children: (
      <Fragment>
        <Copyright>&copy; Acme Inc. {CURRENT_YEAR}. All rights reserved.</Copyright>
        <FooterNavigation>
          <FooterLink href="#">Lorem</FooterLink>
          <FooterLink href="#">Ipsum</FooterLink>
          <FooterLink href="#">Sit</FooterLink>
          <FooterLink href="#">Dolor</FooterLink>
        </FooterNavigation>
      </Fragment>
    ),
  },
}

export default {
  title: 'Library/Footer',
  component: Footer,
  subcomponents: {
    FooterLink,
    FooterNavigation,
    Copyright,
  },
  tags: ['navigation', 'footer', 'anchor', 'organism'],
  argTypes: {
    children: {
      description: 'The tree that composes the footer content with link and semantic navigation.\n\n**Prop name:** `children`',
      control: {
        type: null,
      },
    },
  },
} as Meta<FooterProps>
