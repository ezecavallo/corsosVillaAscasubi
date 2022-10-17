import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../assets/images/logo.webp";

const PageOne = () => {
  return (
    <Flex
      width={"100%"}
      flexDirection="column"
      alignItems={"center"}
      marginBottom="5em"
      className="heading"
    >
      <Box
        w={"100%"}
        h="100%"
        maxW={["60%", "40%", "40%", "500px"]}
        display="block"
      >
        <Image
          src={Logo}
          objectFit="contain"
          layout="responsive"
          width={570}
          height={575}
        />
      </Box>
      <Button
        margin="2em"
        padding="2em"
        w={"13em"}
        bgGradient="linear-gradient(281.23deg, #6F0018 -54.09%, #DE0030 71.11%)"
        borderRadius={"20px"}
        textTransform="uppercase"
        lineHeight="0"
        fontWeight="bold"
      >
        Saca tu entrada
      </Button>
      <Box
        textTransform="uppercase"
        textAlign="center"
        fontSize="xl"
        fontWeight="bold"
      >
        <Text>VIERNES 18</Text>
        <Text>SÁBADO 19</Text>
        <Text>FEBRERO 2022</Text>
        <Text>PLAZA SAN MARTÍN</Text>
      </Box>
    </Flex>
  );
};

export default PageOne;
