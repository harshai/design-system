import {
  ScaleObject,
  Scale,
  ScaleToRem,
  ColorMap,
  ColorPalatte,
} from "./types";

export function scaleToRem(obj: ScaleObject): ScaleToRem {
  return Object.keys(obj).reduce((prev, curr) => {
    return {
      ...prev,
      [`${curr}`]:
        curr === "max" ? `${obj[curr as Scale]}%` : `${obj[curr as Scale]}rem`,
    };
  }, {});
}

export function generateSemanticColorNames(
  colorMap: ColorMap[],
  colorPalatte: ColorPalatte
) {
  return colorMap.reduce((prev, curr) => {
    return {
      ...prev,
      [`${curr.usage}Dark`]:
        colorPalatte[`${curr.baseColor}Dark`][`${curr.baseColor}${curr.scale}`],
      [`${curr.usage}`]:
        colorPalatte[curr.baseColor][`${curr.baseColor}${curr.scale}`],
    };
  }, {});
}
