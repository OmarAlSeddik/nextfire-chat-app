import { Stack } from "@mantine/core";
import { useRouter } from "next/router";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = (props: any) => {
  const router = useRouter();
  const url = router.route;

  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        flexGrow: "1",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[4],
      })}
    >
      {url === "/" ? null : <Header />}
      <Body loadedPage={props.loadedPage} />
      {url === "/" ? null : <Footer />}
    </Stack>
  );
};

export default Main;
