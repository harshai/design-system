import { Appearance } from "./types";

const appearanceBgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const appearanceFgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

export default function resolveAppearance(appearance: Appearance) {
  return {
    color: appearanceFgMap[appearance],
    backgroundColor: appearanceBgMap[appearance],
  };
}
