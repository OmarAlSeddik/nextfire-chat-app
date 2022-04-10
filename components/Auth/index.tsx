// -- mantine -- //
import { Button, Stack, Text } from "@mantine/core";
// -- basic & custom hooks -- //
import useIsMobile from "@/hooks/useIsMobile";
// -- library -- //
import signInWithGoogle from "library/signInWithGoogle";

const Auth = () => {
  const isMobile = useIsMobile();

  return (
    <Stack
      align="center"
      justify="center"
      sx={{ minHeight: "100vh" }}
      onClick={() => signInWithGoogle(isMobile)}
    >
      <Text size="xl">NextFire Chat App</Text>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
