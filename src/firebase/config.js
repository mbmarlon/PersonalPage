// Firebase core
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWjHBIZ93ZIE4Z5DN_4YB8WZrukom3Ka8",
  authDomain: "portfolio-57be0.firebaseapp.com",
  projectId: "portfolio-57be0",
  storageBucket: "portfolio-57be0.firebasestorage.app",
  messagingSenderId: "276101807886",
  appId: "1:276101807886:web:0bdc846ebf8f5b4bf5215f",
  measurementId: "G-GB9GDY1F39",
};
export const app = initializeApp(firebaseConfig);

// 🔹 Instancias
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
