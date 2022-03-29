import { createElement } from "react";
import clsx from "clsx";

import { sprinkles } from "design-system/tokens";
import { baseReset, elementReset } from "design-system/reset";

import { BoxProps } from "./types";
import { splitProps } from "./utils";
import boxStyles from "./Box.css";

const Box = ({ as: element = "div", ...props }: BoxProps) => {
  const { boxProps, sprinkleProps } = splitProps(props, sprinkles);

  const resetStyles =
    typeof element === "string" && Object.keys(elementReset).includes(element)
      ? [...baseReset, ...elementReset[element]]
      : baseReset;

  return createElement(element, {
    ...boxProps,
    className: clsx(resetStyles, boxStyles, sprinkles(sprinkleProps)),
  });
};
Box.displayName = "Box";

export default Box;
