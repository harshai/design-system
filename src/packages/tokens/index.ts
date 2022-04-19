import { createSprinkles } from "@vanilla-extract/sprinkles";

import spaceProperties from "./space.css";
import colorProperties from "./colors.css";
import typographyProperties from "./typography.css";
import interactionProperties from "./interaction.css";

export const sprinkles = createSprinkles(
  spaceProperties,
  colorProperties,
  typographyProperties,
  interactionProperties
);

// TODO: Find a way to move this into ./types.ts.
export type Sprinkles = Parameters<typeof sprinkles>[0];
export type SprinklesProps = keyof Sprinkles;
