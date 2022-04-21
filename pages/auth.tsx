import Auth from "@/components/Auth";
import Loading from "@/components/Loading";
import { auth } from "@/firebase";
import { Box } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.replace("/");
  }, [loading, router, user]);

  if (loading) return <Loading />;
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign into the NextFire Chat app." />
      </Head>
      <Auth />
    </Box>
  );
};

export default AuthPage;
