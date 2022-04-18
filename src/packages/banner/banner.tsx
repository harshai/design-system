import Box from "design-system/box";
import Text from "design-system/text";
import { resolveAppearance } from "design-system/utils";
import bannerStyles from "./banner.css";

import BannerProps from "./types";

const Banner = ({ children, appearance, ...props }: BannerProps) => {
  const { color, backgroundColor } = resolveAppearance(appearance);

  return (
    <Box
      as="div"
      padding="l"
      backgroundColor={backgroundColor}
      color={color}
      className={bannerStyles}
      {...props}
    >
      <Text fontSize="m">{children}</Text>
    </Box>
  );
};

export default Banner;
