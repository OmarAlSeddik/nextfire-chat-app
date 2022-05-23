import { Stack } from "@mantine/core";
import { color1 } from "library/stylingVariables";
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
        flex: "1",
        backgroundColor: color1(theme),
      })}
    >
      {url === "/" ? null : <Header />}
      <Body loadedPage={props.loadedPage} />
      {url === "/" ? null : <Footer />}
    </Stack>
  );
};

export default Main;
