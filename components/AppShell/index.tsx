import useIsMobile from "@/hooks/useIsMobile";
import { Group } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppShell = (props: any) => {
  const router = useRouter();
  const url = router.route;
  const isMobile = useIsMobile();

  if (url === "/auth") return <>{props.children}</>;

  return (
    <Group spacing={0}>
      {isMobile ? null : <Navbar />}
      <Main loadedPage={props.children} />
      {url === "/" ? null : <Sidebar />}
    </Group>
  );
};

export default AppShell;
