import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./badge";

export default {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appearance: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <>
    <Badge {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "10",
  appearance: "default",
  max: 100,
};
