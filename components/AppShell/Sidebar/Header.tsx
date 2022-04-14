// -- mantine -- //
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
      <Text size="xl">[Room Settings]</Text>
    </Stack>
  );
};

export default Header;
