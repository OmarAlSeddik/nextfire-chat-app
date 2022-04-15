// -- mantine -- //
import { Box } from "@mantine/core";
// -- local components -- //
import Home from "@/components/Home";
import Loading from "@/components/Loading";
// -- next -- //
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- general hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;
  return (
    <Box sx={{ overflow: "hidden" }}>
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
