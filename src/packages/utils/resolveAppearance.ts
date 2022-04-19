import { Appearance } from "./types";

const appearanceBgMap = {
  primary: {
    lightMode: "primary",
    darkMode: "primaryDark",
    hoverLight: "primaryHover",
    hoverDark: "primaryHoverDark",
    focusLight: "primaryFocus",
    focusDark: "primaryFocusDark",
    activeLight: "primaryActive",
    activeDark: "primaryActiveDark",
  },
  default: {
    lightMode: "neutral",
    darkMode: "neutralDark",
    hoverLight: "neutralHover",
    hoverDark: "neutralHoverDark",
    focusLight: "neutralFocus",
    focusDark: "neutralFocusDark",
    activeLight: "neutralActive",
    activeDark: "neutralActiveDark",
  },
};

const appearanceFgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

function removePressableStyles(styles) {
  let style = {};

  for (let s in styles) {
    if (
      !(
        s.startsWith("focus") ||
        s.startsWith("hover") ||
        s.startsWith("active")
      )
    ) {
      style[s] = styles[s];
    }
  }

  return style;
}

export default function resolveAppearance(
  appearance: Appearance,
  isPressable?: boolean
) {
  return {
    backgroundColor: isPressable
      ? appearanceBgMap[appearance]
      : removePressableStyles(appearanceBgMap[appearance]),
    color: appearanceFgMap[appearance],
  };
}
