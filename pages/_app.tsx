import AppShell from "@/components/AppShell";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { AnimatePresence } from "framer-motion";
import appTheme from "library/appTheme";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = router.route;
  const { primaryColor, colorScheme } = useLoggedInUser();

  appTheme.primaryColor = primaryColor;
  appTheme.colorScheme = colorScheme;

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={appTheme}>
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
