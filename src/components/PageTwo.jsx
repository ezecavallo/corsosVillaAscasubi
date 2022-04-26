import { Box, Button, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Banner from "../assets/images/banner.png";

const PageTwo = () => {
  return (
    <Box w="100%" h="100%" display="block">
      <Image src={Banner} layout="" />
    </Box>
  );
};

export default PageTwo;
