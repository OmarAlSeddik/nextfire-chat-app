import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import createNewUser from "library/createNewUser";

const signInWithGoogle = (isMobile: boolean) => {
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

export default signInWithGoogle;
