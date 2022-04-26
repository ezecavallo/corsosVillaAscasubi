import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const dark = "#2D3A42";
const light = "#f0f0f0";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(light, "#0D001E")(props),
      },
    }),
  },
});

export default theme;
