// -- mantine -- //
import { Stack } from "@mantine/core";
// -- local components -- //
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        width: "15rem",
        backgroundColor: theme.colors.dark[6],
      })}
    >
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Sidebar;
