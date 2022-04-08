// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- library -- //
import signOut from "library/signOut";
import authRedirectResult from "library/authRedirectResult";

const Home = () => {
  authRedirectResult();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      onClick={() => signOut()}
    >
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Sign Out
      </Button>
    </Stack>
  );
};

export default Home;
