import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";
import firebaseConfig from "../../firebaseConfig.json";
import { getStorage } from "firebase/storage";

const firebase = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const functions = getFunctions(firebase, "europe-west1");
const db = getFirestore(firebase);
const storage = getStorage(firebase);
const messaging = getMessaging(firebase);

export { auth, db, functions, storage, messaging };
export default firebase;
