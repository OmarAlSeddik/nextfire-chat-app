import { Stack, Text } from "@mantine/core";
import authRedirectResult from "library/authRedirectResult";
import Rooms from "./Rooms";
import Theme from "./Theme";

const Home = () => {
  authRedirectResult();

  return (
    <Stack
      align="center"
      sx={{
        height: "100%",
      }}
    >
      <Text
        component="h1"
        weight="bold"
        sx={{ fontSize: "2.5rem", lineHeight: 1 }}
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 180 }}
      >
        NextFire Chat
      </Text>
      <Rooms />
      <Theme />
    </Stack>
  );
};

export default Home;
