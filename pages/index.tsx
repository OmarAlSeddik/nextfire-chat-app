import Home from "@/components/Home";
import Loading from "@/components/Loading";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Box } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { uid, loading } = useLoggedInUser();

  useEffect(() => {
    if (!uid && !loading) router.replace("/auth");
  }, [loading, router, uid]);

  if (loading) return <Loading />;
  return (
    <Box sx={{ overflow: "hidden", height: "100%" }}>
      <Head>
        <title>NextFire Chat App</title>
        <meta
          name="description"
          content="The main page of the NextFire Chat app."
        />
      </Head>
      <Home />
    </Box>
  );
};

export default HomePage;
