import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

export default createNewUser;
