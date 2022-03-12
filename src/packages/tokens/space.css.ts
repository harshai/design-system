import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { scaleToRem } from "./utils";
import { ScaleObject } from "./types";

const space: ScaleObject = {
  none: 0,
  xs: 0.125,
  s: 0.25,
  m: 0.5,
  l: 1,
  xl: 2,
};

const border: ScaleObject = {
  none: 0,
  s: 0.125,
  m: 0.25,
  l: 0.5,
};

const borderRadius: ScaleObject = {
  none: 0,
  m: 0.5,
  max: 999,
};

export const spaceProperties = defineProperties({
  properties: {
    gap: scaleToRem(space),
    padding: scaleToRem(space),
    border: scaleToRem(border),
  },
});
