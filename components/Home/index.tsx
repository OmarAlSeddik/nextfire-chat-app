import useLoggedInUser from "@/hooks/useLoggedInUser";
import { ScrollArea, Stack, Text } from "@mantine/core";
import authRedirectResult from "library/authRedirectResult";
import getSecondaryColor from "library/getSecondaryColor";
import Rooms from "./Rooms";
import Theme from "./Theme";

const Home = () => {
  const { primaryColor } = useLoggedInUser();

  authRedirectResult();

  return (
    <ScrollArea sx={{ height: "100vh" }}>
      <Stack align="center">
        <Text
          component="h1"
          weight="bold"
          sx={{ fontSize: "2.5rem", lineHeight: 1 }}
          variant="gradient"
          gradient={{
            from: primaryColor,
            to: getSecondaryColor(primaryColor),
            deg: 180,
          }}
        >
          NextFire Chat
        </Text>
        <Rooms />
        <Theme />
      </Stack>
    </ScrollArea>
  );
};

export default Home;
