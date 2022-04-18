import { ComponentStory, ComponentMeta } from "@storybook/react";

import Lozenge from "./lozenge";

export default {
  title: "Example/Lozenge",
  component: Lozenge,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appearance: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Lozenge>;

const Template: ComponentStory<typeof Lozenge> = (args) => (
  <>
    <Lozenge {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "lozenge",
  appearance: "default",
};
