import { ChakraProvider } from "@chakra-ui/react";
import { store } from "@store/index";
import { Config, DAppProvider, Mainnet } from "@usedapp/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import og_BabyloniaTwitterImage from "public/images/twitter/SLIDES_MainBabylonia_280322_960x480.png";
import { Provider as ReduxProvider } from "react-redux";
import { theme } from "src/configs/theme";
import { AppStateProvider } from "src/hooks/useAppState";
import "../styles/globals.css";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "src/lib/gtag";

const keywords = `"cryptocurrency gambling", "cryptocurrency gambling platform", "gaming on blockchain", "gambling on blockchain", "gaming on binance smart chain", "gaming on polygon", "gaming on fantom", "gambling on binance smart chat", "gambling on polygon", "gambling on fantom", "betting with cryptocurrency", "betting on esport", "babylonia gaming gambling"
`;
const og_title = "Babylonia Game on Blockchain";
const og_description =
  "Babylonia is where you can have fun, get entertained and win some money. It is a transparent, fair & rewarding system all based on blockchain BSC Polygon Fantom";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      if (typeof window !== "undefined") {
        gtag.pageview(url);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppStateProvider>
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
          <DAppProvider config={config}>
            <Head>
              <title> Alpha Stage | Babylonia Game on Blockchain </title>
              <link rel="shortcut icon" href="/BABY.png" />
              <meta httpEquiv="content-language" content="en-us" />
              <meta charSet="utf-8" />
              <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Permanent+Marker"
              />
              <meta
                name="description"
                content="Babylonia is where you can have fun, get entertained and win some money. It is a transparent, fair & rewarding system all based on blockchain BSC Polygon Fantom"
                key="desc"
              />
              <meta name="keywords" content={keywords} key="keywords" />
              {/* <meta name="image" content={`${BabyLogo}`} key="ogtitle" /> */}
              <meta property="og:type" content="website" key="ogtype" />
              <meta property="og:title" content={`${og_title}`} key="ogtitle" />
              <meta
                property="og:description"
                content={`${og_description}`}
                key="ogdesc"
              />
              <meta
                property="twitter:card"
                content="summary_large_image"
                key="twcard"
              />
              <meta
                name="twitter:creator"
                content="AppBabylonia"
                key="twhandle"
              />
              <meta
                name="twitter:title"
                content={`${og_title}`}
                key="twtitle"
              />
              <meta
                name="twitter:description"
                content={`${og_description}`}
                key="twdescription"
              />
              <meta
                name="twitter:image"
                content={`${og_BabyloniaTwitterImage.src}`}
                key="twimage"
              />
              <meta
                property="og:url"
                content="https://twitter.com/AppBabylonia"
                key="ogurl"
              />
              <meta
                property="og:image"
                content={`${og_BabyloniaTwitterImage.src}`}
                key="ogimage"
              />
              <meta
                property="og:site_name"
                content="Babylonia.app"
                key="ogsitename"
              />
            </Head>
            <Component {...pageProps} />
          </DAppProvider>
        </ReduxProvider>
      </ChakraProvider>
    </AppStateProvider>
  );
};

export default App;
