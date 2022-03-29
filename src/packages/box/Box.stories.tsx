import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

export default {
  title: "Example/Box",
  component: Box,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    {...args}
    onClick={() => console.log()}
    role="button"
    padding="l"
    display="flex"
    border="l"
    borderRadius="m"
    borderColor="red"
  />
);

export const Simple = Template.bind({});
Simple.args = {
  children: "test",
};
