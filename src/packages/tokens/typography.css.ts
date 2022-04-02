import { defineProperties } from "@vanilla-extract/sprinkles";

import { ScaleObject } from "./types";
import { scaleToRem } from "./utils";

const fontSize: ScaleObject = {
  s: 0.75,
  m: 1,
  l: 2,
  xl: 2.5,
};

const fontFamily = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const typographyProperties = defineProperties({
  properties: {
    fontSize: scaleToRem(fontSize),
    fontFamily,
  },
});

export default typographyProperties;
