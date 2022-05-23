import { Box } from "@mantine/core";

const Body = (props: any) => {
  return <Box sx={{ flex: "1", position: "relative" }}>{props.loadedPage}</Box>;
};

export default Body;
