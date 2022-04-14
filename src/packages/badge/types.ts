import { BoxProps } from "design-system/box/types";
import { Sprinkles } from "design-system/tokens";

type Appearance = "primary" | "default";
// | "critical"
// | "caution"
// | "primary"
// | "positive"
// | "info"
// | "promote";

export default interface BadgeProps extends BoxProps {
  appearance: Appearance;
}
