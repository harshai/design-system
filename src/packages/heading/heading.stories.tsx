import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./heading";

export default {
  title: "Example/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appearance: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "div"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "Heading",
  appearance: "default",
  as: "h1",
  isEmphasised: false,
};
