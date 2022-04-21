import { SegmentedControl, Stack } from "@mantine/core";

const Header = (props: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => {
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
