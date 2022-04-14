import Box from "design-system/box";
import Text from "design-system/text";

import badgeStyles from "./badge.css";
import BadgeProps from "./types";

const appearanceBgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const appearanceTextMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const Badge = ({ children, appearance, ...props }: BadgeProps) => {
  const backgroundColor = appearanceBgMap[appearance];
  const color = appearanceTextMap[appearance];

  if (!children) {
    return null;
  }

  return (
    <Box
      as="span"
      padding="xs"
      borderWidth="s"
      borderRadius="l"
      borderStyle="solid"
      borderColor="primary"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
      color={color}
      className={badgeStyles}
      {...props}
    >
      <Text fontSize="s">{children}</Text>
    </Box>
  );
};

export default Badge;
