import { Sprinkles } from "design-system/tokens";
/**
 * A utility function which separates Box props from Sprinkles props
 * @param props Props passed to the Box component
 * @param sprinkles Sprinkles object which is exported from tokens
 * @returns An object containing Box props and Sprinkles props in two separate keys.
 */

const splitProps = (
  props: Record<string, any>,
  sprinkles: { properties: Set<string> }
) =>
  Object.keys(props).reduce(
    function ({ sprinkleProps, boxProps }, curr) {
      if (sprinkles.properties.has(curr)) {
        return {
          sprinkleProps: { ...sprinkleProps, [curr]: props[curr] },
          boxProps,
        };
      }
      return {
        sprinkleProps,
        boxProps: { ...boxProps, [curr]: props[curr] },
      };
    },
    {
      sprinkleProps: {},
      boxProps: {},
    }
  );

export { splitProps };
