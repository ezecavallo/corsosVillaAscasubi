import { Container, Button, Box, Stack, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="24px"
      align="center"
      justify="center"
      h="70px"
      textTransform="uppercase"
      fontWeight="bold"
      marginBottom="2em"
    >
      <Link>Inicio</Link>
      <Link>Inscribirse</Link>
      <Link>Entradas</Link>
      <Link>Contacto</Link>
    </Stack>
  );
};

export default Header;
