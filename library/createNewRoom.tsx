import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

const createNewRoom = (
  roomName: string,
  password: string,
  isPublic: boolean,
  admin: string
) => {
  addDoc(collection(db, "rooms"), {
    roomName,
    password,
    isPublic,
    admin,
  });
};

export default createNewRoom;
