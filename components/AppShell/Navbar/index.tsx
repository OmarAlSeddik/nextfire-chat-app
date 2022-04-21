import { Stack } from "@mantine/core";
import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("room");

  return (
    <Stack
      sx={(theme) => ({
        height: "100vh",
        width: "15rem",
        backgroundColor: theme.colors.dark[6],
      })}
    >
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body />
      <Footer />
    </Stack>
  );
};

export default Navbar;
