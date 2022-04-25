import { Group, Text } from "@mantine/core";
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
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[4],
        },
      })}
    >
      <Home />
      <Text weight="bold">Home Page</Text>
    </Group>
  );
};

export default Footer;
