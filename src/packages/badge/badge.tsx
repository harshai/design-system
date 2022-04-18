import Box from "design-system/box";
import Text from "design-system/text";

import BadgeProps from "./types";

const appearanceBgMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const appearanceTextMap = {
  primary: { lightMode: "primary", darkMode: "primaryDark" },
  default: { lightMode: "neutral", darkMode: "neutral" },
};

const Badge = ({ children, appearance, max = 100, ...props }: BadgeProps) => {
  const backgroundColor = appearanceBgMap[appearance];
  const color = appearanceTextMap[appearance];

  const count = parseInt(children, 10);

  if (isNaN(count)) {
    return null;
  }

  return (
    <Box
      as="span"
      padding="s"
      minWidth="l"
      minHeight="l"
      borderWidth="s"
      borderRadius="xl"
      borderStyle="solid"
      borderColor="primary"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <Text fontSize="s">{count <= max ? count : `${max}+`}</Text>
    </Box>
  );
};

export default Badge;
