// -- mantine -- //
import { Button, Stack } from "@mantine/core";
// -- library -- //
import signOut from "library/signOut";
import authRedirectResult from "library/authRedirectResult";

const Home = () => {
  authRedirectResult();

  return (
    <Stack align="center" justify="center" onClick={() => signOut()}>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Sign Out
      </Button>
    </Stack>
  );
};

export default Home;
