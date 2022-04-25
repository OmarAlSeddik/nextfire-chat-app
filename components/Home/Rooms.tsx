import PrimaryColorContext from "@/context/primaryColorContext";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import getSecondaryColor from "library/getSecondaryColor";
import { useContext } from "react";

const Rooms = () => {
  const primaryColor = useContext(PrimaryColorContext).primaryColor;

  return (
    <Card
      shadow="md"
      sx={(theme) => ({
        width: "30rem",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[5],
      })}
    >
      <Stack align="center">
        <Text weight="bold" sx={{ fontSize: "2.1rem", lineHeight: 1.3 }}>
          Rooms
        </Text>
        <Group align="center">
          <Stack>
            <TextInput
              label="Join a Public Room"
              placeholder="Enter Room ID"
              sx={(theme) => ({
                input: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.gray[4],
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
          <Text weight="bold" size="xl" sx={{ margin: "auto 0" }}>
            OR
          </Text>
          <Stack>
            <TextInput
              label="Directly Message a User"
              placeholder="Enter User ID"
              sx={(theme) => ({
                input: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.gray[4],
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
