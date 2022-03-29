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
    function ({ atomProps, boxProps }, curr) {
      if (sprinkles.properties.has(curr)) {
        return {
          atomProps: { ...atomProps, [curr]: props[curr] },
          boxProps,
        };
      }
      return {
        atomProps,
        boxProps: { ...boxProps, [curr]: props[curr] },
      };
    },
    {
      atomProps: {},
      boxProps: {},
    }
  );

export { splitProps };
