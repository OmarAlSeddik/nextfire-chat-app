// -- mantine -- //
import { Group } from "@mantine/core";
// -- local components -- //
import Navbar from "./Navbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
// -- next -- //
import { useRouter } from "next/dist/client/router";

const AppShell = (props: any) => {
  const router = useRouter();
  const url = router.route;

  if (url === "/auth") return <>{props.children}</>;

  return (
    <Group spacing={0}>
      <Navbar />
      <Main loadedPage={props.children} />
      <Sidebar />
    </Group>
  );
};

export default AppShell;
