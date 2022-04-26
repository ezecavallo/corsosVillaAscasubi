import Head from "next/head";
import { useState } from "react";

import { Container, useMediaQuery } from "@chakra-ui/react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";

import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";

const Home = () => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Corsos - Villa Ascasubi</title>
      </Head>
      <Container
        as="section"
        maxW="100%"
        px="0"
        pb={10}
        centerContent
        className="home"
      >
        <Parallax
          translateY={["-400px", "400px"]}
          style={{ zIndex: "9", width: "100%" }}
          startScroll={isLessThan800 ? -2000 : -900}
          endScroll={isLessThan800 ? 2000 : 900}
        >
          <PageOne />
        </Parallax>
        <Parallax style={{ zIndex: "9" }}>
          <PageTwo />
        </Parallax>

        <Parallax
          translateY={["-100px", "600px"]}
          opacity={[-2, 8]}
          speed={-10}
          style={{ marginTop: "-300px", paddingBottom: "200px" }}
        >
          <PageThree />
        </Parallax>
        <Parallax>
          <PageOne />
        </Parallax>
      </Container>
    </>
  );
};

export default Home;
