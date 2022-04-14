// -- mantine -- //
import { Button, Stack, Text } from "@mantine/core";
// -- library -- //
import signOut from "library/signOut";
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
      onClick={() => signOut()}
    >
      <Text size="xl">[Room / Home Page]</Text>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Sign Out
      </Button>
    </Stack>
  );
};

export default Home;
