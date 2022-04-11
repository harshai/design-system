import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./text";

export default {
  title: "Example/Text",
  component: Text,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <>
    <Text {...args} />
  </>
);

export const Simple = Template.bind({});
Simple.args = {
  children: "a quick brown fox jumped over a lazy dog",
};
