import { createSprinkles } from "@vanilla-extract/sprinkles";

import spaceProperties from "./space.css";

export const sprinkles = createSprinkles(spaceProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
export type SprinklesProps = keyof Sprinkles;
