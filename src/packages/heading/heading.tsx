import Text from "design-system/text";
import { Scale } from "design-system/tokens/types";

import HeadingProps from "./types";

const colorMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

type FontMap = Record<HeadingProps["as"], { [a: string]: Scale }>; // TODO: Use mapped object
const fontMap: FontMap = {
  h1: {
    fontSize: "xl",
    fontWeight: "xl",
  },
  h2: {
    fontSize: "l",
    fontWeight: "l",
  },
  h3: {
    fontSize: "m",
    fontWeight: "m",
  },
  h4: {
    fontSize: "s",
    fontWeight: "m",
  },
  div: {
    fontSize: "s",
    fontWeight: "s",
  },
};

const Heading = ({
  children,
  as = "h1",
  appearance = "default",
  isEmphasised,
  ...props
}: HeadingProps) => {
  const color = colorMap[appearance];
  const fontStyles = fontMap[as];

  return (
    <Text
      as={as}
      color={color}
      textDecoration={isEmphasised ? "underline" : "none"}
      {...fontStyles}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Heading;
