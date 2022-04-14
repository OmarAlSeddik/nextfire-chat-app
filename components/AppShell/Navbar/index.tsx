// -- mantine -- //
import { Stack } from "@mantine/core";
// -- local components -- //
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// -- basic & custom hooks -- //
import { useState } from "react";

const Section1 = () => {
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

export default Section1;
