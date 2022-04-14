// -- mantine -- //
import { Stack, Text } from "@mantine/core";

const Footer = () => {
  return (
    <Stack
      align="center"
      justify="center"
      sx={(theme) => ({
        height: "4rem",
        padding: "0rem 1rem",
        boxShadow: theme.shadows.xs,
      })}
    >
      <Text size="xl">[Logged In User]</Text>
    </Stack>
  );
};

export default Footer;
