// -- mantine -- //
import { Avatar, Group, Loader, Stack, Text, Tooltip } from "@mantine/core";
// -- basic & custom hooks -- //
import useUser from "@/hooks/useUser";
import { useState } from "react";

const Footer = () => {
  const [user, loading] = useUser();
  const uid = user?.uid.stringValue;
  const displayName = user?.displayName.stringValue;
  const photoUrl = user?.photoUrl.stringValue;

  const [openedToolTip, setOpenToolTip] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

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
        cursor: "pointer",
        "&:hover": { opacity: "0.5" },
      }}
    >
      <Avatar radius="md" src={photoUrl} />
    </Stack>
  );

  const displayUser = loading ? (
    <Loader variant="dots" />
  ) : (
    <Tooltip
      withArrow
      radius="md"
      color={copiedToClipboard ? "green" : "gray"}
      label={copiedToClipboard ? "Copied!" : "Click to copy the UID"}
      opened={openedToolTip}
      sx={{ flexGrow: "1" }}
    >
      <Stack
        justify="center"
        sx={{ height: "100%", cursor: "pointer" }}
        onMouseEnter={() => {
          setOpenToolTip((open: boolean) => !open);
          setCopiedToClipboard(false);
        }}
        onMouseLeave={() => setOpenToolTip((open: boolean) => !open)}
        onClick={() => {
          navigator.clipboard.writeText(uid);
          setCopiedToClipboard(true);
        }}
      >
        <Text
          weight="bold"
          sx={(theme) => ({
            transition: "0.25s",
            "&:hover": { color: theme.colors.orange[5] },
          })}
        >
          {displayName}
        </Text>
      </Stack>
    </Tooltip>
  );

  return (
    <Group
      spacing="xs"
      sx={(theme) => ({
        height: "4rem",
        padding: "0rem 1rem",
        boxShadow: theme.shadows.xs,
      })}
    >
      {displayAvatar}
      {displayUser}
    </Group>
  );
};

export default Footer;
