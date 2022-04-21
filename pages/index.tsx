import Home from "@/components/AppShell/Home";
import Loading from "@/components/Loading";
import { auth } from "@/firebase";
import { Box } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

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
