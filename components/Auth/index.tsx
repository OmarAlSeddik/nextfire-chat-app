// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- basic/custom hooks //
import { useContext } from "react";
// -- context -- //
import ThemeContext from "@/context/ThemeContext";
// -- library -- //
import signInWithGoogle from "library/signInWithGoogle";

const Auth = () => {
  const context = useContext(ThemeContext);
  const isMobile = context.isMobile;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      onClick={() => signInWithGoogle(isMobile)}
    >
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
