// -- mantine -- //
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Group } from "@mantine/core";
import { color2 } from "library/stylingVariables";
// -- general hooks -- //
import { useState } from "react";
import DisplayAvatar from "./DisplayAvatar";
import DisplayUser from "./DisplayUser";
// -- library -- //
import ProfileModal from "./ProfileModal";

const Footer = () => {
  const { loading, photoUrl, displayName } = useLoggedInUser();

  const [openedModal, setOpenedModal] = useState(false);

  return (
    <>
      <ProfileModal openedModal={openedModal} setOpenedModal={setOpenedModal} />
      <Group
        spacing="xs"
        sx={(theme) => ({
          height: "4rem",
          padding: "0rem 1rem",
          boxShadow: theme.shadows.xs,
          userSelect: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: color2(theme),
          },
        })}
        onClick={() => setOpenedModal(true)}
      >
        <DisplayAvatar loading={loading} photoUrl={photoUrl} />
        <DisplayUser loading={loading} displayName={displayName} />
      </Group>
    </>
  );
};

export default Footer;
