import { Stack, Link } from "@chakra-ui/react";
import LinkNext from "next/link";

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
      <Link as={LinkNext} href="votation">
        Votacion
      </Link>
    </Stack>
  );
};

export default Header;
