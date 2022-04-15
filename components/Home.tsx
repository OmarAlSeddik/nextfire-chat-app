// -- mantine -- //
import { Stack, Text } from "@mantine/core";
// -- library -- //
import authRedirectResult from "library/authRedirectResult";

const Home = () => {
  authRedirectResult();

  return (
    <Stack
      align="center"
      justify="center"
      sx={{
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}
    >
      <Text size="xl">[Room / Home Page]</Text>
    </Stack>
  );
};

export default Home;
