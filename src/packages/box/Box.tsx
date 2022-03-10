import { ReactNode } from "react";
import boxStyles from "./Box.css";

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <div className={boxStyles}>{children}</div>;
};

export default Box;
