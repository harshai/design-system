import { ScaleObject, Scale, ScaleToRem } from "./types";

export function scaleToRem(obj: ScaleObject): ScaleToRem {
  return Object.keys(obj).reduce((prev, curr) => {
    return {
      ...prev,
      [`${curr}`]:
        curr === "max" ? `${obj[curr as Scale]}%` : `${obj[curr as Scale]}rem`,
    };
  }, {});
}
