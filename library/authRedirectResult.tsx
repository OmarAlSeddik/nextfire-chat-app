import { auth } from "@/firebase";
import { getRedirectResult } from "firebase/auth";
import createNewUser from "library/createNewUser";

const authRedirectResult = () => {
  getRedirectResult(auth).then((result) => {
    if (result) {
      const user = result.user;
      if (user && user.email && user.displayName && user.photoURL) {
        createNewUser(user.uid, user.email, user.displayName, user.photoURL);
      }
    }
  });
};

export default authRedirectResult;
