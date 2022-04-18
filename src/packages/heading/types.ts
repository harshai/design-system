import { BoxProps } from "design-system/box/types";

type Appearance = "primary" | "default";
// | "critical"
// | "caution"
// | "primary"
// | "positive"
// | "info"
// | "promote";

export default interface HeadingProps extends BoxProps {
  as: "h1" | "h2" | "h3" | "h4" | "div";
  appearance: Appearance;
  children: string;
  isEmphasised?: boolean;
}
