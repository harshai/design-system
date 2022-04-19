import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appearance: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "Button",
  appearance: "default",
};
