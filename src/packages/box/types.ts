import React, { ReactNode, ElementType } from "react";

import { Sprinkles } from "design-system/tokens";

export interface BoxProps extends Sprinkles {
  children: ReactNode;
  as?: ElementType;
  onClick?: () => void;
  role?: string;
}
