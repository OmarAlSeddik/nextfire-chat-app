// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";
// -- firebase -- //
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const useUser = (uid: string = "") => {
  const [authUser, loading] = useAuthState(auth);
  const userDoc = uid ? uid : authUser?.uid;

  const url = `${process.env.NEXT_PUBLIC_USERS_URL}/${userDoc}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 5000 });

  const user = data?.fields;
  const loadingUser = (!data && !error) || loading;
  const loadingUserError = error;

  return [user, loadingUser, loadingUserError];
};

export default useUser;
