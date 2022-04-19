import { ReactNode } from "react";

import { BoxProps } from "design-system/box/types";
import { Appearance } from "design-system/utils";

export default interface ButtonProps extends BoxProps {
  appearance: Appearance;
  children: ReactNode;
}
