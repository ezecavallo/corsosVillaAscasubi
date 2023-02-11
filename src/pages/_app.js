import Head from "next/head";
import Script from "next/script";
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/images/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
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
