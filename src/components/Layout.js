import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Button,
  Box,
  Heading,
  ColorModeScript,
} from "@chakra-ui/react";
import { useTheme, useColorMode } from "@chakra-ui/react";
import Header from "./Header";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container className="wrapper" maxW="100%" px="0">
        <span className="bottom"></span>
        <Header />
        <Box paddingBottom="5em">{children}</Box>
        {/* <Container
        as="footer"
        position="absolute"
        bottom={0}
        height="3em"
        marginTop="-3em"
      >
        BoxBoxBoxBoxBoxBox
      </Container> */}
      </Container>
    </>
  );
};
