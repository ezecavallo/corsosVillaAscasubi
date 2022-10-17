import Head from "next/head";

import { Container, useMediaQuery } from "@chakra-ui/react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";

import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";

const Home = () => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const [isLessThan480] = useMediaQuery("(max-width: 480px)");

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
          translateY={
            isLessThan480 ? ["-100px", "1200px"] : ["-100px", "600px"]
          }
          opacity={[-2, 15]}
          speed={-8}
          style={{
            marginTop: "-200px",
            paddingBottom: isLessThan480 ? "600px" : "200px",
          }}
        >
          <PageThree />
        </Parallax>
        <Parallax
          style={{
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <PageOne />
        </Parallax>
      </Container>
    </>
  );
};

export default Home;
