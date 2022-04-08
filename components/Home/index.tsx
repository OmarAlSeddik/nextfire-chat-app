// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- firebase -- //
import { auth, db } from "@/firebase";
import { getRedirectResult } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Home = () => {
  const signOut = () => {
    auth.signOut();
  };

  const createNewUser = async (
    uid: string,
    email: string,
    displayName: string,
    photoUrl: string
  ) => {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      setDoc(userRef, { uid, email, displayName, photoUrl });
    }
  };

  getRedirectResult(auth).then((result) => {
    if (result) {
      const user = result.user;
      if (user && user.email && user.displayName && user.photoURL) {
        createNewUser(user.uid, user.email, user.displayName, user.photoURL);
      }
    }
  });

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      onClick={signOut}
    >
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Sign Out
      </Button>
    </Stack>
  );
};

export default Home;
