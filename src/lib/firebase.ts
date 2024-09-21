import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";
import firebaseConfig from "../../firebaseConfig.json";
import { getStorage } from "firebase/storage";
import { COLLECTIONS } from "./collections";

const firebase = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const functions = getFunctions(firebase, "europe-west1");
const db = getFirestore(firebase);
const storage = getStorage(firebase);
const messaging = getMessaging(firebase);

export { auth, db, functions, storage, messaging };
export default firebase;

export async function submitAnswer(questionId: string, answer: string) {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ANSWERS), {
      questionId,
      answer,
      createdAt: new Date()
    });
    console.log("Answer submitted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding answer: ", e);
  }
}
