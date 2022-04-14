// -- mantine -- //
import { Stack } from "@mantine/core";
// -- local components -- //
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Section2 = (props: any) => {
  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        flexGrow: "1",
        backgroundColor: theme.colors.dark[5],
      })}
    >
      <Header />
      <Body loadedPage={props.loadedPage} />
      <Footer />
    </Stack>
  );
};

export default Section2;
