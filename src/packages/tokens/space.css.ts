import { defineProperties } from "@vanilla-extract/sprinkles";
import { scaleToRem } from "./utils";
import { ScaleObject } from "./types";

const space: ScaleObject = {
  none: 0,
  xs: 0.125,
  s: 0.25,
  m: 0.5,
  l: 1,
  xl: 2,
  // TODO:
  // Max is required for width and height, but isn't required for padding.
  // Is there a better away to handle this?
  max: 100,
};

const border: ScaleObject = {
  none: 0,
  s: 0.0625,
  m: 0.125,
  l: 0.25,
};

const borderRadius = {
  none: 0,
  m: 0.25,
  l: 0.5,
  xl: 1,
  max: 100,
};

const spaceProperties = defineProperties({
  properties: {
    display: ["none", "flex", "inline-flex"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: scaleToRem(space),
    paddingLeft: scaleToRem(space),
    paddingRight: scaleToRem(space),
    paddingTop: scaleToRem(space),
    paddingBottom: scaleToRem(space),
    borderWidth: scaleToRem(border),
    borderStyle: ["solid", "none"],
    borderRadius: scaleToRem(borderRadius),
    aspectRatio: ["1"],
    minWidth: scaleToRem(space),
    maxWidth: scaleToRem(space),
    minHeight: scaleToRem(space),
    maxHeight: scaleToRem(space),
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
  },
});

export default spaceProperties;
