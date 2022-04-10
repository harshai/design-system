import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

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
};
