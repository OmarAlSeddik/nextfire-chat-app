import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Loader, Stack, Text } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";

const Loading = () => {
  const { primaryColor } = useLoggedInUser();

  return (
    <Stack align="center" justify="center" sx={{ height: "100vh" }}>
      <Text
        component="h1"
        variant="gradient"
        gradient={{
          from: primaryColor,
          to: getSecondaryColor(primaryColor),
          deg: 180,
        }}
        size="xl"
      >
        Loading...
      </Text>
      <Loader size="xl" />
    </Stack>
  );
};

export default Loading;
