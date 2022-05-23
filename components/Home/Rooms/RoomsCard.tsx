import useIsMobile from "@/hooks/useIsMobile";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import { color1, color2 } from "library/stylingVariables";
import getSecondaryColor from "library/getSecondaryColor";

const RoomsCard = (props: { setOpenedModal: (value: boolean) => void }) => {
  const { primaryColor } = useLoggedInUser();
  const isMobile = useIsMobile();

  const setOpenedModal = props.setOpenedModal;

  return (
    <Card
      shadow="md"
      sx={(theme) => ({
        "@media (max-width: 700px)": {
          width: "20rem",
        },
        width: "27rem",
        backgroundColor: color2(theme),
      })}
    >
      <Stack align={isMobile ? "stretch" : "center"}>
        <Text
          weight="bold"
          sx={{ fontSize: "2.1rem", lineHeight: 1.3 }}
          align="center"
        >
          Rooms
        </Text>
        <Group align="center" direction={isMobile ? "column" : "row"}>
          <Group
            direction={isMobile ? "row" : "column"}
            align={isMobile ? "end" : "stretch"}
            sx={{
              "@media (max-width: 700px)": {
                width: "100%",
              },
            }}
          >
            <TextInput
              label="Join a Public Room"
              placeholder="Enter Room ID"
              sx={(theme) => ({
                flex: "1",
                input: {
                  backgroundColor: color1(theme),
                },
              })}
            />
            <Button
              compact={!isMobile}
              variant="gradient"
              gradient={{
                from: primaryColor,
                to: getSecondaryColor(primaryColor),
              }}
            >
              {isMobile ? "X" : "Confirm"}
            </Button>
          </Group>
          <Group
            direction={isMobile ? "row" : "column"}
            align={isMobile ? "end" : "stretch"}
            sx={{
              "@media (max-width: 700px)": {
                width: "100%",
              },
            }}
          >
            <TextInput
              label="Directly Message a User"
              placeholder="Enter User ID"
              sx={(theme) => ({
                flex: "1",
                input: {
                  backgroundColor: color1(theme),
                },
              })}
            />
            <Button
              compact={!isMobile}
              variant="gradient"
              gradient={{
                from: primaryColor,
                to: getSecondaryColor(primaryColor),
              }}
            >
              {isMobile ? "X" : "Confirm"}
            </Button>
          </Group>
        </Group>
        <Button
          variant="gradient"
          gradient={{
            from: primaryColor,
            to: getSecondaryColor(primaryColor),
          }}
          onClick={() => setOpenedModal(true)}
        >
          Create a New Room
        </Button>
      </Stack>
    </Card>
  );
};

export default RoomsCard;
