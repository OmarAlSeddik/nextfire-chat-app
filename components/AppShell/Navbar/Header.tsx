import useLoggedInUser from "@/hooks/useLoggedInUser";
import { SegmentedControl, Stack } from "@mantine/core";

const Header = (props: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => {
  const { primaryColor } = useLoggedInUser();

  return (
    <Stack
      justify="center"
      sx={(theme) => ({
        height: "4rem",
        padding: "0rem 1rem",
        boxShadow: theme.shadows.xs,
      })}
    >
      <SegmentedControl
        radius="xl"
        fullWidth
        color={primaryColor}
        value={props.activeTab}
        onChange={props.setActiveTab}
        data={[
          { label: "Room List", value: "room" },
          { label: "DM List", value: "dm" },
        ]}
      />
    </Stack>
  );
};

export default Header;
