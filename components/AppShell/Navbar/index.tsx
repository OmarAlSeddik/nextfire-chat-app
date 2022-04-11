import { Container, Stack } from "@mantine/core";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Navbar = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Navbar;
