import { Stack } from "@mantine/core";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        width: "15rem",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[6],
      })}
    >
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Sidebar;
