// -- mantine -- //
import { Loader, Stack, Text } from "@mantine/core";

const Loading = () => {
  return (
    <Stack align="center" justify="center">
      <Text
        component="h1"
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 180 }}
        size="xl"
      >
        Loading...
      </Text>
      <Loader size="xl" />
    </Stack>
  );
};

export default Loading;
