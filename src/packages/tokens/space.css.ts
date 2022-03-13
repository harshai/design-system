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
    display: ["none", "flex"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: scaleToRem(space),
    paddingLeft: scaleToRem(space),
    paddingRight: scaleToRem(space),
    paddingTop: scaleToRem(space),
    paddingBottom: scaleToRem(space),
    border: scaleToRem(border),
    borderRadius: scaleToRem(borderRadius),
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
  },
});
