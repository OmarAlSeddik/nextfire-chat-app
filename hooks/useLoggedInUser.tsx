import { auth, db } from "@/firebase";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

const useLoggedInUser = () => {
  const [authUser, loadingLoggedInUser] = useAuthState(auth);
  const loggedInUserRef = doc(db, "users", authUser?.uid || "placeholder");

  const [userData, loadingData] = useDocumentData(loggedInUserRef);

  const loading = loadingLoggedInUser || loadingData;

  return {
    loading,
    colorScheme: userData?.colorScheme,
    uid: userData?.uid,
    displayName: userData?.displayName,
    photoUrl: userData?.photoUrl,
    primaryColor: userData?.primaryColor,
  };
};

export default useLoggedInUser;
