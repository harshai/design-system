import { defineProperties } from "@vanilla-extract/sprinkles";

const interactionProperties = defineProperties({
  properties: {
    cursor: ["pointer", "default"],
    userSelect: ["none"],
  },
});

export default interactionProperties;
