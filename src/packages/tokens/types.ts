export type Scale = "none" | "xs" | "s" | "m" | "l" | "xl" | "max";
export type ScaleObject = Partial<Record<Scale, number>>;
export type ScaleToRem = Partial<Record<Scale, number>>;

export type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Usage = string; //"app" | "appSubtle";
export type BaseColors = "indigo" | "slate" | "indigoDark" | "slateDark";
export type ColorMap = {
  usage: Usage;
  scale: ColorScale;
  baseColor: BaseColors;
};
export type ColorPalatte = Record<
  BaseColors,
  Record<`${BaseColors}${ColorScale}`, string>
>;
