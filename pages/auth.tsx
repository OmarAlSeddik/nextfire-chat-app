// -- mui -- //
import { Box } from "@mui/system";
// -- local components -- //
import Auth from "@/components/Auth";
import Loading from "@/components/Loading";
// -- next -- //
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.replace("/");
  }, [loading, router, user]);

  if (loading) return <Loading />;
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign into the NextFire Chat app." />
      </Head>
      <Auth />
    </Box>
  );
};

export default AuthPage;
