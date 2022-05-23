import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const changeRoomPicture = async (id: string, photoUrl: string) => {
  const roomRef = doc(db, "rooms", id);
  const docSnap = await getDoc(roomRef);
  if (docSnap.exists()) {
    setDoc(roomRef, { photoUrl }, { merge: true });
  }
};

export default changeRoomPicture;
