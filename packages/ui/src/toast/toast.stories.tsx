import { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Button from "../button/button";
import ToastAction from "../toast-action/toast-action";
import ToastController from "../toast-controller/toast-controller";
import toast, { type ToastFnPayload } from "../use-toast/toast";

import Toast from "./toast";

type Story = StoryObj<ToastFnPayload>;

export const Overview: Story = {};

export const WithAction: Story = {
  args: {
    action: <ToastAction altText="Undo">Undo</ToastAction>,
  },
};
WithAction.storyName = "+ Action";

export const WithTitle: Story = {
  args: {
    title: "Lorem ipsum",
  },
};
WithTitle.storyName = "+ Title";

export const WithTitleAndAction: Story = {
  args: {
    title: "Lorem ipsum",
    action: <ToastAction altText="Undo">Undo</ToastAction>,
  },
};
WithTitleAndAction.storyName = "+ Title + Action";

export default {
  title: "Functional/Toast",
  component: Toast,
  args: {
    variant: "default",
    description: "Lorem ipsum dolor sit amet",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    title: {
      name: "Title",
      description: "The title of the toast.\n\n**Prop name**: `title`",
      control: {
        type: "text",
      },
    },
    description: {
      name: "Description",
      description:
        "The description of the toast.\n\n**Prop name**: `description`",
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    (Story) => (
      <Fragment>
        {Story()}
        <ToastController />
      </Fragment>
    ),
  ],
  render({ title, description, variant, action, ...props }) {
    function handleClick() {
      toast({
        title,
        description,
        variant,
        action,
        ...props,
      });
    }

    return (
      <Button variant="secondary" onClick={handleClick}>
        Render a toast
      </Button>
    );
  },
} as Meta<ToastFnPayload>;
