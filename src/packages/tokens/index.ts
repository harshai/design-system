import { createSprinkles } from "@vanilla-extract/sprinkles";

import spaceProperties from "./space.css";

export const sprinkles = createSprinkles(spaceProperties);

// TODO: Find a way to move this into ./types.ts.
export type Sprinkles = Parameters<typeof sprinkles>[0];
export type SprinklesProps = keyof Sprinkles;
