import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import { ParallaxProvider } from "react-scroll-parallax";
import { Layout } from "../components/Layout";
import theme from "../Theme";

import "../assets/styles/master.css";
// import "../assets/style/master.css";

// This default export is required in a new `pages/_app.js` file.
export default function _App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Fonts />
      <ParallaxProvider>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */

          #__next {
            height: 100%;
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </ChakraProvider>
  );
}
