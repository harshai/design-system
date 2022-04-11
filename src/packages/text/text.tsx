import Box from "design-system/box";

import textStyles from "./text.css";
import TextProps from "./types";

const Text = ({
  as = "span",
  fontSize = "m",
  fontFamily = "body",
  display = "inline-flex",
  ...props
}: TextProps) => {
  return (
    <Box
      as={as}
      fontFamily={fontFamily}
      fontSize={fontSize}
      className={textStyles}
      {...props}
    />
  );
};

export default Text;
