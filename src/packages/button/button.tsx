import Box from "design-system/box";
import Text from "design-system/text";
import { resolveAppearance } from "design-system/utils";

import ButtonProps from "./types";

const apparanceBorderMap = {
  primary: {
    lightMode: "primary",
    darkMode: "primaryDark",
    hoverLight: "primaryHover",
    hoverDark: "primaryHoverDark",
    focusLight: "primaryFocus",
    focusDark: "primaryFocusDark",
    activeLight: "primaryActive",
    activeDark: "primaryActiveDark",
  },
  default: {
    lightMode: "neutral",
    darkMode: "neutralDark",
    hoverLight: "neutralHover",
    hoverDark: "neutralHoverDark",
    focusLight: "neutralFocus",
    focusDark: "neutralFocusDark",
    activeLight: "neutralActive",
    activeDark: "neutralActiveDark",
  },
};

const Button = ({ children, appearance, ...props }: ButtonProps) => {
  const { color, backgroundColor } = resolveAppearance(appearance, true);
  const borderColor = apparanceBorderMap[appearance];

  return (
    <Box
      as="button"
      padding="m"
      backgroundColor={backgroundColor}
      color={color}
      borderStyle="solid"
      borderWidth="s"
      borderColor={borderColor}
      borderRadius="m"
      cursor="pointer"
      {...props}
    >
      <Text fontSize="s">{children}</Text>
    </Box>
  );
};

export default Button;
