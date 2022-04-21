import { Box } from "@mantine/core";

const Body = (props: any) => {
  return (
    <Box sx={{ flexGrow: "1", position: "relative" }}>{props.loadedPage}</Box>
  );
};

export default Body;
