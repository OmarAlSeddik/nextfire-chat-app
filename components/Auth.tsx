import PrimaryColorContext from "@/context/primaryColorContext";
import useIsMobile from "@/hooks/useIsMobile";
import { Button, Stack, Text } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";
import signInWithGoogle from "library/signInWithGoogle";
import { useContext } from "react";

const Auth = () => {
  const isMobile = useIsMobile();
  const primaryColor = useContext(PrimaryColorContext).primaryColor;

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
      >
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
