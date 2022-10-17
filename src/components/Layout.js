import { Container, Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <>
      <Container className="wrapper" maxW="100%" px="0">
        <span className="bottom"></span>
        <Box paddingBottom="5em">{children}</Box>
      </Container>
    </>
  );
};
