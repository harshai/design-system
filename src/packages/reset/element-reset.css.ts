import { style } from "@vanilla-extract/css";
import { ElementType } from "react";

const appearance = style({
  appearance: "none",
});

const userSelect = style({
  userSelect: "none",
});

type ElementReset = Record<string, string[]>;
const elementReset: ElementReset = {
  button: [
    appearance,
    userSelect,
    style({
      outline: "none",
      background: "none",
    }),
  ],
};

export default elementReset;
