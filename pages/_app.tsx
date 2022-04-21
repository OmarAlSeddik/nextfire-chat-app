import AppShell from "@/components/AppShell";
import { ColorScheme, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { AnimatePresence } from "framer-motion";
import appTheme from "library/appTheme";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = router.route;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider theme={appTheme} withNormalizeCSS withGlobalStyles>
      <NotificationsProvider position="bottom-center">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <AppShell>
            <Component {...pageProps} key={url} />
          </AppShell>
        </AnimatePresence>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
