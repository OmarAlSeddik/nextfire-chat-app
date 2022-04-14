// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";
// -- firebase -- //
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const useUser = (uid: string = "") => {
  const [authUser, loading] = useAuthState(auth);
  const userDoc = uid ? uid : authUser?.uid;

  const url = `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${userDoc}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher);

  const user = data?.fields;
  const loadingUser = (!data && !error) || loading;
  const loadingUserError = error;

  return [user, loadingUser, loadingUserError];
};

export default useUser;
