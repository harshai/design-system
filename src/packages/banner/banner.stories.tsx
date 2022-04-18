import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from "./banner";

export default {
  title: "Example/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appearance: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <>
    <Banner {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "This is a banner",
  appearance: "default",
};
