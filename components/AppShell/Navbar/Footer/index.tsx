// -- mantine -- //
import useUser from "@/hooks/useUser";
import { Group } from "@mantine/core";
// -- general hooks -- //
import { useState } from "react";
import DisplayAvatar from "./DisplayAvatar";
import DisplayUser from "./DisplayUser";
// -- library -- //
import ProfileModal from "./ProfileModal";

const Footer = () => {
  const [user, loading] = useUser();
  const uid = user?.uid.stringValue;
  const displayName = user?.displayName.stringValue;
  const photoUrl = user?.photoUrl.stringValue;

  const [openedModal, setOpenedModal] = useState(false);
  const [optimisticPhoto, setOptimisticPhoto] = useState(null);

  return (
    <>
      <ProfileModal
        openedModal={openedModal}
        setOpenedModal={setOpenedModal}
        uid={uid}
        displayName={displayName}
        photoUrl={photoUrl}
        optimisticPhoto={optimisticPhoto}
        setOptimisticPhoto={setOptimisticPhoto}
      />
      <Group
        spacing="xs"
        sx={(theme) => ({
          height: "4rem",
          padding: "0rem 1rem",
          boxShadow: theme.shadows.xs,
          userSelect: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[5],
          },
        })}
        onClick={() => setOpenedModal(true)}
      >
        <DisplayAvatar
          loading={loading}
          photoUrl={optimisticPhoto ?? photoUrl}
        />
        <DisplayUser loading={loading} displayName={displayName} />
      </Group>
    </>
  );
};

export default Footer;
