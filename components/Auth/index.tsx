// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- firebase -- //
import { auth, db } from "@/firebase";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
// -- basic/custom hooks //
import { useContext } from "react";
// -- context -- //
import ThemeContext from "@/context/ThemeContext";

const Auth = () => {
  const context = useContext(ThemeContext);
  const isMobile = context.isMobile;

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

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    if (isMobile) {
      signInWithRedirect(auth, provider);
    }

    if (!isMobile) {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        if (user && user.email && user.displayName && user.photoURL) {
          createNewUser(user.uid, user.email, user.displayName, user.photoURL);
        }
      });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      onClick={signInWithGoogle}
    >
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Sign In With Google
      </Button>
    </Stack>
  );
};

export default Auth;
