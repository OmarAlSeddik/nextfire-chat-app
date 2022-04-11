import { Stack } from "@mantine/core";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = (props: any) => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      <Body loadedPage={props.loadedPage} />
      <Footer />
    </Stack>
  );
};

export default Main;
