// -- firebase -- //
import { db } from "@/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const changeUserPicture = async (uid: string, photoUrl: string) => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    setDoc(userRef, { photoUrl: `${photoUrl}.png` }, { merge: true });
  }
};

export default changeUserPicture;
