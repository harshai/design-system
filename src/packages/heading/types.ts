import { BoxProps } from "design-system/box/types";
import { Appearance } from "design-system/utils";

export default interface HeadingProps extends BoxProps {
  as: "h1" | "h2" | "h3" | "h4" | "div";
  appearance: Appearance;
  children: string;
  isEmphasised?: boolean;
}
