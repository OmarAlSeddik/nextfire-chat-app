import Auth from "@/components/Auth";
import Loading from "@/components/Loading";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { Box } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const { uid, loading } = useLoggedInUser();

  useEffect(() => {
    if (uid) router.replace("/");
  }, [loading, router, uid]);

  if (loading) return <Loading />;
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Head>
        z<title>Sign In</title>
        <meta name="description" content="Sign into the NextFire Chat app." />
      </Head>
      <Auth />
    </Box>
  );
};

export default AuthPage;
