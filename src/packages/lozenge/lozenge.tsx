import Box from "design-system/box";
import Text from "design-system/text";
import { resolveAppearance } from "design-system/utils";

import LozengeProps from "./types";

const Badge = ({ children, appearance, ...props }: LozengeProps) => {
  const { color, backgroundColor } = resolveAppearance(appearance);

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
