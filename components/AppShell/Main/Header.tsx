import { Stack, Text } from "@mantine/core";

const Header = () => {
  return (
    <Stack
      align="center"
      justify="center"
      sx={(theme) => ({
        height: "4rem",
        padding: "0.75rem 1rem",
        boxShadow: theme.shadows.xs,
      })}
    >
      <Text size="xl">[Room / Person name]</Text>
    </Stack>
  );
};

export default Header;
