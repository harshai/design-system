const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
const { resolve } = require("path");
const projectRootDir = resolve(__dirname);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin());

    return {
      ...config,
      resolve: {
        alias: {
          "design-system": resolve(projectRootDir, "../src/packages"),
        },
      },
    };
  },
};
