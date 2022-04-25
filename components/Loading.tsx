import PrimaryColorContext from "@/context/primaryColorContext";
import { Loader, Stack, Text } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";
import { useContext } from "react";

const Loading = () => {
  const primaryColor = useContext(PrimaryColorContext).primaryColor;

  return (
    <Stack align="center" justify="center" sx={{ height: "100%" }}>
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
