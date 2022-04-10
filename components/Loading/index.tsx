// -- mantine -- //
import { Loader, Stack, Text } from "@mantine/core";

const Loading = () => {
  return (
    <Stack align="center" justify="center" sx={{ minHeight: "100vh" }}>
      <Text size="xl">Loading...</Text>
      <Loader size="xl" />
    </Stack>
  );
};

export default Loading;
