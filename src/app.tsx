import { useColorScheme } from "design-system/hooks";
import Box from "design-system/box";

const App = () => {
  useColorScheme();
  return <Box>This is a box</Box>;
};

export default App;
