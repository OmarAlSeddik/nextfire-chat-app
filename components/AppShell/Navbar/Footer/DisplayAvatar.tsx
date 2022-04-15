// -- mantine -- //
import { Avatar, Loader, Stack } from "@mantine/core";

const DisplayAvatar = (props: { loading: boolean; photoUrl: string }) => {
  const loading = props.loading;
  const photoUrl = props.photoUrl;

  return loading ? (
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
};

export default DisplayAvatar;
