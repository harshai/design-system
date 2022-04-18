import { BoxProps } from "design-system/box/types";

type Appearance = "primary" | "default";
// | "critical"
// | "caution"
// | "primary"
// | "positive"
// | "info"
// | "promote";

export default interface LozengeProps extends BoxProps {
  appearance: Appearance;
}
