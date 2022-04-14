import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { indigo, indigoDark } from "@radix-ui/colors";

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();
    useEffect(
      () =>
        (document.documentElement.dataset.theme = isDarkMode
          ? "dark"
          : "light"),
      [isDarkMode]
    );
    return Story();
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: indigoDark.indigo1,
      appBg: indigoDark.indigo2,
      inputBorder: indigoDark.indigo6,
      brandTitle: "My custom storybook",
    },
    light: {
      ...themes.normal,
      appContentBg: indigo.indigo1,
      appBg: indigo.indigo2,
      inputBorder: indigoDark.indigo6,
    },
  },
};
