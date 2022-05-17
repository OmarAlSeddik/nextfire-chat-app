import useIsMobile from "@/hooks/useIsMobile";
import { Button, Stack, Text } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";
import signInWithGoogle from "library/signInWithGoogle";

const Auth = () => {
  const primaryColor = "orange";
  const isMobile = useIsMobile();

  return (
    <Stack align="center" justify="center" sx={{ minHeight: "100vh" }}>
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
        NextFire Chat App
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: primaryColor, to: getSecondaryColor(primaryColor) }}
        onClick={() => signInWithGoogle(isMobile)}
      >
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
