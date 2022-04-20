// -- mantine -- //
import { Stack } from "@mantine/core";
// -- local components -- //
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Main = (props: any) => {
  const router = useRouter();
  const url = router.route;

  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        flexGrow: "1",
        backgroundColor: theme.colors.dark[4],
      })}
    >
      {url === "/" ? null : <Header />}
      <Body loadedPage={props.loadedPage} />
      {url === "/" ? null : <Footer />}
    </Stack>
  );
};

export default Main;
