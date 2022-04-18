import Box from "design-system/box";
import Text from "design-system/text";
import { resolveAppearance } from "design-system/utils";

import BadgeProps from "./types";

const Badge = ({ children, appearance, max = 100, ...props }: BadgeProps) => {
  const { color, backgroundColor } = resolveAppearance(appearance);

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
