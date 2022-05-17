import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const changeUserPrimaryColor = async (
  uid: string,
  primaryColor: string = ""
) => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists() && primaryColor !== "") {
    setDoc(userRef, { primaryColor }, { merge: true });
  }
};

export default changeUserPrimaryColor;
