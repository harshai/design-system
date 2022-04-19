import { defineProperties } from "@vanilla-extract/sprinkles";

import { ScaleObject } from "./types";
import { scaleToRem } from "./utils";

const fontSize: ScaleObject = {
  s: 0.75,
  m: 1,
  l: 1.25,
  xl: 1.5,
  xxl: 1.75,
  xxxl: 2,
};

const fontWeight = {
  s: "300",
  m: "400",
  l: "500",
  xl: "600",
};

const fontFamily = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const typographyProperties = defineProperties({
  properties: {
    fontSize: scaleToRem(fontSize),
    fontFamily,
    fontWeight,
    textDecoration: ["underline", "none"],
    textTransform: ["uppercase", "capitalize", "lowercase"],
  },
});

export default typographyProperties;
