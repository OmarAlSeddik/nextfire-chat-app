// -- mantine -- //
import { SegmentedControl, Stack } from "@mantine/core";

const Header = (props: any) => {
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
