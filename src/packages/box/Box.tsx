import { ReactNode } from "react";
import boxStyles from "./Box.css";
import { spaceProperties } from "design-system/tokens";

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <div className={`${boxStyles} ${spaceProperties}`}>{children}</div>;
};

export default Box;
