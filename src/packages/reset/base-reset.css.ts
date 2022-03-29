import { style } from "@vanilla-extract/css";

const trim = style({
  margin: 0,
  padding: 0,
  border: 0,
});

const boxSizing = style({
  boxSizing: "border-box",
});

const baseReset = [trim, boxSizing];

export default baseReset;
