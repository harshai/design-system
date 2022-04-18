import Box from "design-system/box";
import Text from "design-system/text";

import LozengeProps from "./types";

const appearanceBgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const appearanceTextMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const Badge = ({ children, appearance, ...props }: LozengeProps) => {
  const backgroundColor = appearanceBgMap[appearance];
  const color = appearanceTextMap[appearance];

  if (!children) {
    return null;
  }

  return (
    <Box
      as="span"
      padding="s"
      borderWidth="s"
      borderRadius="m"
      borderStyle="solid"
      borderColor="primary"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <Text fontSize="s" textTransform="uppercase">
        {children}
      </Text>
    </Box>
  );
};

export default Badge;
