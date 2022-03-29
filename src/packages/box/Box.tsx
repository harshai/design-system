import React, {
  ReactNode,
  createElement,
  forwardRef,
  ElementType,
} from "react";
import clsx from "clsx";

import { sprinkles, Sprinkles } from "design-system/tokens";

import { splitProps } from "./utils";
import boxStyles from "./Box.css";

interface BoxProps extends Sprinkles {
  children: ReactNode;
  as?: ElementType;
  onClick?: () => void;
  role?: string;
}

const Box = ({ as = "div", ...props }: BoxProps) => {
  const { boxProps, atomProps } = splitProps(props, sprinkles);

  return createElement(as, {
    ...boxProps,
    className: clsx(boxStyles, sprinkles(atomProps)),
  });
};
Box.displayName = "Box";

export default Box;
