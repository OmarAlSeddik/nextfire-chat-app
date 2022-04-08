// -- firebase -- //
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const useUser = async (uid: string = "") => {
  const [authUser, loading] = useAuthState(auth);
  let authUserData = {};
  if (authUser) {
    const userRef = doc(db, "users", uid || authUser.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      authUserData = userSnap.data();
    }
  }
  return [authUserData, loading];
};

export default useUser;
