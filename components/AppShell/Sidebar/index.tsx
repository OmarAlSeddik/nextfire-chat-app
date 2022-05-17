import { Stack } from "@mantine/core";
import { color2 } from "library/colorVariables";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        width: "15rem",
        backgroundColor: color2(theme),
      })}
    >
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Sidebar;
