import { Container } from "@mantine/core";

const Body = (props: any) => {
  return <Container sx={{ flexGrow: "1" }}>{props.loadedPage}</Container>;
};

export default Body;
