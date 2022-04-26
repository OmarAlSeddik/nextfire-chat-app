import CustomContext from "@/context/CustomContext";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";
import { useContext } from "react";

const Rooms = () => {
  const context = useContext(CustomContext);
  const primaryColor = context.primaryColor;
  const isMobile = context.isMobile;

  return (
    <Card
      shadow="md"
      sx={(theme) => ({
        width: "27rem",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[4],
      })}
    >
      <Stack align="center">
        <Text weight="bold" sx={{ fontSize: "2.1rem", lineHeight: 1.3 }}>
          Rooms
        </Text>
        <Group align="center" direction={isMobile ? "column" : "row"}>
          <Stack>
            <TextInput
              label="Join a Public Room"
              placeholder="Enter Room ID"
              sx={(theme) => ({
                input: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.gray[3],
                },
              })}
            />
            <Button
              compact
              variant="gradient"
              gradient={{
                from: primaryColor,
                to: getSecondaryColor(primaryColor),
              }}
            >
              Confirm
            </Button>
          </Stack>
          <Stack>
            <TextInput
              label="Directly Message a User"
              placeholder="Enter User ID"
              sx={(theme) => ({
                input: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.gray[3],
                },
              })}
            />
            <Button
              compact
              variant="gradient"
              gradient={{
                from: primaryColor,
                to: getSecondaryColor(primaryColor),
              }}
            >
              Confirm
            </Button>
          </Stack>
        </Group>
        <Button
          variant="gradient"
          gradient={{ from: primaryColor, to: getSecondaryColor(primaryColor) }}
        >
          Create a New Room
        </Button>
      </Stack>
    </Card>
  );
};

export default Rooms;
