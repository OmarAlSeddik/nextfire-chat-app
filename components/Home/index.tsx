// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- firebase -- //
import { auth } from "../../firebase";

const Home = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      onClick={signOut}
    >
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Sign Out
      </Button>
    </Stack>
  );
};

export default Home;
