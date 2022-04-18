import { BoxProps } from "design-system/box";
import { Appearance } from "design-system/utils";

export default interface BadgeProps extends BoxProps {
  appearance: Appearance;
  max: number;
  children: string;
}
