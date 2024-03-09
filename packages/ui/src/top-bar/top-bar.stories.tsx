import { Fragment } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import TopBar, { type TopBarProps } from './top-bar'

import TopBarButton from '../top-bar-button/top-bar-button'

type Story = StoryObj<TopBarProps>

export const Overview: Story = {}

export default {
  title: 'Playground/TopBar',
  component: TopBar,
  subcomponents: {
    TopBarButton,
  },
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <Fragment>
        <TopBarButton href="#">Lorem</TopBarButton>
        <TopBarButton href="#">Ipsum</TopBarButton>
        <TopBarButton href="#">Sit</TopBarButton>
        <TopBarButton href="#">Dolor</TopBarButton>
      </Fragment>
    ),
  },
  argTypes: {
    children: {
      name: 'Buttons',
      description:
        'The children to render inside the top bar. It is strongly recommended to utilise the TopBarButton component for the children of this component.\n\n**Prop name:** `children`',
      control: {
        type: null,
      },
    },
  },
} as Meta<TopBarProps>
