// -- mantine -- //
// -- firebase -- //
import { storage } from "@/firebase";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import {
  Avatar,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { showNotification } from "@mantine/notifications";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import changeUserName from "library/changeUserName";
import changeUserPicture from "library/changeUserPicture";
import getSecondaryColor from "library/getSecondaryColor";
// -- library -- //
import signOut from "library/signOut";
// -- general hooks -- //
import { useRef, useState } from "react";
// -- icons -- //
import { Check, X } from "tabler-icons-react";

const ProfileModal = (props: {
  openedModal: boolean;
  setOpenedModal: (value: boolean) => void;
}) => {
  const [openedModal, setOpenedModal] = [
    props.openedModal,
    props.setOpenedModal,
  ];

  const { uid, displayName, photoUrl, primaryColor } = useLoggedInUser();

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [editingDisplayName, setEditingDisplayName] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageSubmit = (image: Blob | Uint8Array | ArrayBuffer) => {
    const imageRef = ref(storage, uid);
    uploadBytes(imageRef, image).then(() =>
      getDownloadURL(imageRef).then((url) => {
        changeUserPicture(uid, url);
      })
    );
  };

  const dropzoneChildren = () => {
    return <Avatar size="xl" radius="md" src={photoUrl} />;
  };

  return (
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
              handleImageSubmit(imageArray[0]);
              showNotification({
                title: "Image Changed Successfully!",
                message: "The change may take a few seconds to apply.",
                color: "green",
                icon: <Check />,
              });
            }}
            onReject={() =>
              showNotification({
                title: "Image Rejected!",
                message:
                  "The maximum file size for the profile picture is 2 MB.",
                color: getSecondaryColor(primaryColor),
                icon: <X />,
              })
            }
            maxSize={2 * 1024 ** 2}
            accept={[
              MIME_TYPES.png,
              MIME_TYPES.jpeg,
              MIME_TYPES.svg,
              MIME_TYPES.gif,
            ]}
          >
            {() => dropzoneChildren()}
          </Dropzone>
        </Stack>
        <Group position="apart">
          <Text weight="bold">Display Name</Text>
          <Button
            compact
            sx={{ width: "8rem" }}
            variant="gradient"
            gradient={{
              from: primaryColor,
              to: getSecondaryColor(primaryColor),
            }}
            onClick={() => {
              setEditingDisplayName(!editingDisplayName);
              if (editingDisplayName) {
                changeUserName(uid, inputRef.current?.value);
              }
            }}
          >
            {editingDisplayName ? "Confirm" : "Change"}
          </Button>
        </Group>
        {editingDisplayName ? (
          <TextInput placeholder={displayName} ref={inputRef} />
        ) : (
          <Text>{displayName}</Text>
        )}
        <Group position="apart">
          <Text weight="bold">UID</Text>
          <Button
            compact
            sx={{ width: "8rem" }}
            variant="gradient"
            gradient={{
              from: copiedToClipboard ? "lime" : primaryColor,
              to: copiedToClipboard ? "green" : getSecondaryColor(primaryColor),
            }}
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
          <Button
            compact
            variant="gradient"
            gradient={{
              from: "red",
              to: "#ff0000",
            }}
            sx={{ width: "6rem" }}
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ProfileModal;
