import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Button, Modal, Stack, Switch, Text, TextInput } from "@mantine/core";
import { zodResolver } from "@mantine/form";
import { useForm } from "@mantine/hooks";
import createNewRoom from "library/createNewRoom";
import getSecondaryColor from "library/getSecondaryColor";
import { color1 } from "library/stylingVariables";
import { useState } from "react";
import { z } from "zod";

const RoomsModal = (props: {
  openedModal: boolean;
  setOpenedModal: (value: boolean) => void;
}) => {
  const { uid } = useLoggedInUser();

  const [openedModal, setOpenedModal] = [
    props.openedModal,
    props.setOpenedModal,
  ];

  const { primaryColor } = useLoggedInUser();

  const [isPasswordProtected, setIsPasswordProtected] = useState(false);

  const schema = z.object({
    roomName: z.string(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" }),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: { roomName: "", password: "" },
  });

  return (
    <Modal
      centered
      withCloseButton={false}
      opened={openedModal}
      onClose={() => {
        setOpenedModal(false);
      }}
    >
      <form
        onSubmit={form.onSubmit((values) => {
          createNewRoom(
            values.roomName,
            isPasswordProtected ? values.password : "",
            true,
            uid
          );
        })}
      >
        <Stack>
          <Text
            weight="bold"
            sx={{ fontSize: "2.1rem", lineHeight: 1.3 }}
            align="center"
          >
            Create a New Room
          </Text>
          <TextInput
            required
            label="Room Name"
            placeholder="Enter Room Name"
            {...form.getInputProps("roomName")}
            sx={(theme) => ({
              flex: "1",
              input: {
                backgroundColor: color1(theme),
              },
            })}
          />
          <TextInput
            disabled={!isPasswordProtected}
            label="Password (Optional)"
            placeholder="Enter Password"
            {...form.getInputProps("password")}
            sx={(theme) => ({
              flex: "1",
              input: {
                backgroundColor: color1(theme),
              },
            })}
          />
          <Switch
            label="Password Protected"
            checked={isPasswordProtected}
            onChange={(event) =>
              setIsPasswordProtected(event.currentTarget.checked)
            }
            sx={{ margin: "0 auto" }}
          />
          <Button
            variant="gradient"
            gradient={{
              from: primaryColor,
              to: getSecondaryColor(primaryColor),
            }}
            type="submit"
          >
            Create a New Room
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default RoomsModal;
