import { Container, Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Header from "./Header";

export const Layout = ({ children }) => {
  const [isLessThan480] = useMediaQuery("(max-width: 480px)");

  return (
    <>
      <Container className="wrapper" maxW="100%" px="0">
        <span className="bottom"></span>
        {!isLessThan480 ? <Header /> : <Box h="100px"></Box>}
        <Box paddingBottom="5em">{children}</Box>
      </Container>
    </>
  );
};
