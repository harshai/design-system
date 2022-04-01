import { createElement } from "react";
import clsx from "clsx";

import * as reset from "design-system/reset";
import { sprinkles } from "design-system/tokens";

import { BoxProps } from "./types";
import { splitProps } from "./utils";
import boxStyles from "./box.css";

const Box = ({ as: element = "div", className, ...props }: BoxProps) => {
  const { baseReset, elementReset } = reset;
  const { boxProps, sprinkleProps } = splitProps(props, sprinkles);

  const resetStyles =
    typeof element === "string" && Object.keys(elementReset).includes(element)
      ? [...baseReset, ...elementReset[element]]
      : baseReset;

  return createElement(element, {
    ...boxProps,
    className: clsx(
      resetStyles,
      boxStyles,
      sprinkles(sprinkleProps),
      className
    ),
  });
};
Box.displayName = "Box";

export default Box;
