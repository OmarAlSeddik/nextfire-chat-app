// -- next -- //
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
// -- providers -- //
import { ThemeContextProvider } from "../context/ThemeContext";
// -- framer motion -- //
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = router.route;
  return (
    <ThemeContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </ThemeContextProvider>
  );
}

export default MyApp;
