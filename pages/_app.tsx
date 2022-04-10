// -- mantine -- //
import { MantineProvider } from "@mantine/core";
// -- next -- //
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- framer motion -- //
import { AnimatePresence } from "framer-motion";
// -- library -- //
import appTheme from "library/appTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = router.route;

  return (
    <MantineProvider theme={appTheme} withGlobalStyles>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </MantineProvider>
  );
}

export default MyApp;
