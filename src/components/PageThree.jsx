import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import show1 from "../assets/images/show1.jpeg";
import show2 from "../assets/images/show2.jpeg";
import show3 from "../assets/images/show3.jpeg";

const PageThree = () => {
  return (
    <>
      <Container w="80%" maxW="1400px" mb="30em">
        <Heading textAlign={"center"} marginY="3em">
          Viví tus noches <br /> a pura alegría
        </Heading>
        <Stack direction={["column", "row"]} spacing="45px">
          <Box
            w="100%"
            h="100%"
            display="block"
            borderRadius="10px"
            overflow={"hidden"}
          >
            <Image src={show1} layout="" />
          </Box>
          <Box
            w="100%"
            h="100%"
            display="block"
            borderRadius="10px"
            overflow={"hidden"}
          >
            <Image src={show2} layout="" />
          </Box>
          <Box
            w="100%"
            h="100%"
            display="block"
            borderRadius="10px"
            overflow={"hidden"}
          >
            <Image src={show3} layout="" />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default PageThree;
