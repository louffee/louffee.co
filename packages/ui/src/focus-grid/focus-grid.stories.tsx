import { Fragment, type FormEvent as ReactFormEvent } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Input from '../input/input'
import Label from '../label/label'
import { toast } from '../use-toast/use-toast'

import Button from '../button/button'
import FocusGrid, { type FocusGridProps } from './focus-grid'

function handleSubmit(event: ReactFormEvent<HTMLFormElement>) {
  event.preventDefault()

  toast({
    title: 'Form submitted',
    description: 'The form has been submitted successfully.',
  })
}

type Story = StoryObj<FocusGridProps>

export const Overview: Story = {
  args: {
    children: (
      <Fragment>
        <div className="flex justify-center items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, cum.</div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-3 flex-col">
            <div className="w-full">
              <Label htmlFor="email">Enter your email address</Label>
              <Input name="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="w-full">
              <Label htmlFor="password">Enter your password</Label>
              <Input name="password" type="password" placeholder="Please enter your password" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Fragment>
    ),
    className: 'w-full h-full p-10',
  },
  decorators: [(Story) => <div className="md:w-[768px]">{Story()}</div>],
}

export default {
  title: 'Library/FocusGrid',
  component: FocusGrid,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<FocusGridProps>
