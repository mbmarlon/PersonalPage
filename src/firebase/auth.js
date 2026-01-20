import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const login = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export const logout = async () => {
  await signOut(auth);
};
