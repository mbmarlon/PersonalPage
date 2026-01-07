import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

// 🔹 Test: crear documento
export const testCreateDoc = async () => {
  const docRef = await addDoc(collection(db, "test"), {
    message: "Hola Firestore 🚀",
    createdAt: new Date(),
  });

  console.log("Documento creado con ID:", docRef.id);
};

export const createPost = async (data) => {
  return await addDoc(collection(db, "portfolio"), {
    ...data,
    createdAt: new Date(),
  });
};

export const getPosts = async () => {
  const q = query(collection(db, "portfolio"), orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
