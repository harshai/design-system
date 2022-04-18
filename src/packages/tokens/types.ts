export type Scale = "none" | "xs" | "s" | "m" | "l" | "xl" | "max";
export type ScaleObject = Partial<Record<Scale, number>>;
export type ScaleToRem = Partial<Record<Scale, number>>;

export type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Usage =
  | "app"
  | "appSubtle"
  | "primary"
  | "primaryHover"
  | "primaryActive"
  | "primaryFocus"
  | "neutral"
  | "neutralHover"
  | "neutralActive";
export type Indigo = "indigo" | "indigoDark";
export type IndigoScale = `${Indigo}${ColorScale}`;
export type Slate = "slate" | "slateDark";
export type SlateScale = `${Slate}${ColorScale}`;
type BaseColor = "indigo" | "slate";
export type ColorMap = {
  usage: Usage;
  scale: ColorScale;
  baseColor: BaseColor;
};
export type ColorPalatte = Record<
  Indigo | Slate,
  Record<IndigoScale | SlateScale, string>
>;
