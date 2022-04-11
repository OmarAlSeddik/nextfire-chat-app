import { Stack } from "@mantine/core";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Sidebar;
