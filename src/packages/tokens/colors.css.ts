import { defineProperties } from "@vanilla-extract/sprinkles";

import { slate, slateDark, indigo, indigoDark } from "@radix-ui/colors";

import { ColorMap, ColorPalatte } from "./types";
import { generateSemanticColorNames } from "./utils";

const palatte = {
  slate,
  slateDark,
  indigo,
  indigoDark,
} as ColorPalatte;
const fgColors: ColorMap[] = [
  {
    usage: "primary",
    scale: 11,
    baseColor: "indigo",
  },
  {
    usage: "neutral",
    scale: 11,
    baseColor: "slate",
  },

  // Accent text colors
  // critical: radixColors.red.red11,
  // criticalDark: radixColors.slate.slate12,
  // caution: radixColors.amber.amber11,
  // cautionDark: radixColors.slate.slate12,
  // positive: radixColors.teal.teal11,
  // positiveDark: radixColors.slate.slate12,
  // info: radixColors.blue.blue11,
  // infoDark: radixColors.slate.slate12,
  // promote: radixColors.purple.purple11,
  // promoteDark: radixColors.slate.slate12,
  // neutral: radixColors.slate.slate11,
  // neutralDark: radixColors.slate.slate12,
];

const bgColors: ColorMap[] = [
  {
    usage: "app",
    scale: 1,
    baseColor: "slate",
  },
  { usage: "appSubtle", scale: 2, baseColor: "indigo" },

  { usage: "primary", scale: 5, baseColor: "indigo" },
  { usage: "primaryHover", scale: 6, baseColor: "indigo" },
  { usage: "primaryActive", scale: 7, baseColor: "indigo" },

  { usage: "neutral", scale: 5, baseColor: "slate" },
  { usage: "neutralHover", scale: 6, baseColor: "slate" },
  { usage: "neutralActive", scale: 7, baseColor: "slate" },
];

const borderColors: ColorMap[] = [
  {
    usage: "primary",
    scale: 8,
    baseColor: "indigo",
  },
  {
    usage: "primaryFocus",
    scale: 9,
    baseColor: "indigo",
  },
  {
    usage: "primaryActive",
    scale: 10,
    baseColor: "indigo",
  },
  {
    usage: "primaryHover",
    scale: 10,
    baseColor: "indigo",
  },
];

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      selector: ":root[data-theme='light'] &",
    },
    darkMode: {
      selector: ":root[data-theme='dark'] &",
    },
  },
  defaultCondition: ["darkMode", "lightMode"],
  properties: {
    backgroundColor: generateSemanticColorNames(bgColors, palatte),
    borderColor: generateSemanticColorNames(borderColors, palatte),
    color: generateSemanticColorNames(fgColors, palatte),
  },
});
export default colorProperties;
