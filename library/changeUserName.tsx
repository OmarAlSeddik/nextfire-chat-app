import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const changeUserName = async (uid: string, displayName: string = "") => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists() && displayName !== "") {
    setDoc(userRef, { displayName }, { merge: true });
  }
};

export default changeUserName;
