// -- mantine -- //
import { Loader, Text } from "@mantine/core";

const DisplayUser = (props: { loading: boolean; displayName: string }) => {
  const loading = props.loading;
  const displayName = props.displayName;

  return loading ? (
    <Loader variant="dots" />
  ) : (
    <Text weight="bold">{displayName}</Text>
  );
};

export default DisplayUser;
