import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const toggleUserColorScheme = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    if (docSnap.data().colorScheme === "light") {
      setDoc(userRef, { colorScheme: "dark" }, { merge: true });
    }
    if (docSnap.data().colorScheme === "dark") {
      setDoc(userRef, { colorScheme: "light" }, { merge: true });
    }
  }
};

export default toggleUserColorScheme;
