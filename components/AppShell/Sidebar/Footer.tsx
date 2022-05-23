import { Group, Text } from "@mantine/core";
import { color2 } from "library/stylingVariables";
import { Home } from "tabler-icons-react";

const Footer = () => {
  return (
    <Group
      spacing="xs"
      position="center"
      sx={(theme) => ({
        height: "4rem",
        padding: "0rem 1rem",
        boxShadow: theme.shadows.xs,
        userSelect: "none",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: color2(theme),
        },
      })}
    >
      <Home />
      <Text weight="bold">Home Page</Text>
    </Group>
  );
};

export default Footer;
