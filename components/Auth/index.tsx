// -- mui -- //
import { Stack, Button } from "@mui/material";
// -- firebase -- //
import { auth, db } from "../../firebase";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// -- basic/custom hooks //
import { useContext } from "react";
// -- context -- //
import ThemeContext from "../../context/ThemeContext";
import { string } from "yup";

const Auth = () => {
  const context = useContext(ThemeContext);
  const isMobile = context.isMobile;

  const createNewUser = (
    uid: string,
    email: string,
    displayName: string,
    photoUrl: string
  ) => {
    const userRef = doc(db, "users", uid);
    setDoc(userRef, { uid, email, displayName, photoUrl }, { merge: true });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    if (isMobile) {
      signInWithRedirect(auth, provider);
      getRedirectResult(auth)
        .then((result) => {
          const credential =
            result && GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result?.user;
          user?.email &&
            user?.displayName &&
            user?.photoURL &&
            createNewUser(
              user.uid,
              user.email,
              user.displayName,
              user.photoURL
            );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    if (!isMobile) {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;
          user?.email &&
            user?.displayName &&
            user?.photoURL &&
            createNewUser(
              user.uid,
              user.email,
              user.displayName,
              user.photoURL
            );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
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
