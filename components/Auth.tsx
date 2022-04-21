import useIsMobile from "@/hooks/useIsMobile";
import { Button, Stack, Text } from "@mantine/core";
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
      <Text
        component="h1"
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 180 }}
        size="xl"
      >
        NextFire Chat App
      </Text>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
