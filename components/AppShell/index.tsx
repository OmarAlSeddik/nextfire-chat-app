import { Grid } from "@mantine/core";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useRouter } from "next/dist/client/router";

const AppShell = (props: any) => {
  const router = useRouter();
  const url = router.route;

  if (url === "/auth") return <>{props.children}</>;

  return (
    <Grid gutter={0}>
      <Grid.Col span={2}>
        <Navbar />
      </Grid.Col>
      <Grid.Col span={8}>
        <Main loadedPage={props.children} />
      </Grid.Col>
      <Grid.Col span={2}>
        <Sidebar />
      </Grid.Col>
    </Grid>
  );
};

export default AppShell;
