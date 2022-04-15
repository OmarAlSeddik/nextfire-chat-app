// -- mantine -- //
import {
  Avatar,
  Button,
  Group,
  Input,
  Loader,
  useMantineTheme,
  MantineTheme,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { Dropzone, DropzoneStatus, MIME_TYPES } from "@mantine/dropzone";
// -- basic & custom hooks -- //
import useUser from "@/hooks/useUser";
import { useState } from "react";
import signOut from "library/signOut";
// -- firebase -- //
import { storage } from "@/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// -- library -- //
import changeUserPicture from "library/changeUserPicture";

const Footer = () => {
  const [user, loading] = useUser();
  const uid = user?.uid.stringValue;
  const displayName = user?.displayName.stringValue;
  const photoUrl = user?.photoUrl.stringValue;

  const [openedModal, setOpenedModal] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [editingDisplayName, setEditingDisplayName] = useState(false);

  const handleSubmit = (image: any) => {
    const imageRef = ref(storage, `${uid}.png`);
    uploadBytes(imageRef, image).then(() =>
      getDownloadURL(imageRef).then((url) => changeUserPicture(uid, url))
    );
  };

  const displayAvatar = loading ? (
    <Stack
      align="center"
      justify="center"
      sx={{
        height: "100%",
        width: "3rem",
      }}
    >
      <Loader variant="oval" />
    </Stack>
  ) : (
    <Stack
      align="center"
      justify="center"
      sx={{
        height: "100%",
        width: "3rem",
      }}
    >
      <Avatar radius="md" src={photoUrl} />
    </Stack>
  );

  const displayUser = loading ? (
    <Loader variant="dots" />
  ) : (
    <Text weight="bold">{displayName}</Text>
  );

  const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => {
    return <Avatar size="xl" radius="md" src={photoUrl} />;
  };
  const theme = useMantineTheme();

  const modal = (
    <Modal
      centered
      withCloseButton={false}
      opened={openedModal}
      onClose={() => {
        setOpenedModal(false);
        setCopiedToClipboard(false);
      }}
    >
      <Stack>
        <Stack align="center">
          <Dropzone
            sx={{ "&:hover": { opacity: "0.5" } }}
            padding={0}
            radius="md"
            multiple={false}
            onDrop={(imageArray) => {
              handleSubmit(imageArray[0]);
            }}
            onReject={(image) => console.log("rejected files", image)}
            maxSize={2 * 1024 ** 2}
            accept={[
              MIME_TYPES.png,
              MIME_TYPES.jpeg,
              MIME_TYPES.svg,
              MIME_TYPES.gif,
            ]}
          >
            {(status) => dropzoneChildren(status, theme)}
          </Dropzone>
        </Stack>
        <Group position="apart">
          <Text weight="bold">Display Name</Text>
          <Button
            compact
            sx={{ width: "8rem" }}
            onClick={() => setEditingDisplayName(!editingDisplayName)}
          >
            {editingDisplayName ? "Confirm" : "Change"}
          </Button>
        </Group>
        {editingDisplayName ? (
          <Input placeholder={displayName} />
        ) : (
          <Text>{displayName}</Text>
        )}
        <Group position="apart">
          <Text weight="bold">UID</Text>
          <Button
            compact
            sx={{ width: "8rem" }}
            color={copiedToClipboard ? "green" : "orange"}
            onClick={() => {
              navigator.clipboard.writeText(uid);
              setCopiedToClipboard(true);
            }}
          >
            {copiedToClipboard ? "Copied!" : "Copy"}
          </Button>
        </Group>
        <Text>{uid}</Text>
        <Stack align="center">
          <Button color="red" sx={{ width: "6rem" }} onClick={() => signOut()}>
            Sign Out
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );

  return (
    <>
      {modal}
      <Group
        spacing="xs"
        sx={(theme) => ({
          height: "4rem",
          padding: "0rem 1rem",
          boxShadow: theme.shadows.xs,
          cursor: "pointer",
          "&:hover": { backgroundColor: theme.colors.dark[5] },
        })}
        onClick={() => setOpenedModal(true)}
      >
        {displayAvatar}
        {displayUser}
      </Group>
    </>
  );
};

export default Footer;
