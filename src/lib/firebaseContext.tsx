import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { Functions } from "firebase/functions";
import { Messaging } from "firebase/messaging";
import { FirebaseStorage } from "firebase/storage";
import { ReactNode, createContext, useContext } from "react";

type FirebaseContext = {
  firebase: FirebaseApp;
  auth: Auth;
  db: Firestore;
  functions: Functions;
  storage: FirebaseStorage;
  messaging: Messaging;
};

const Context = createContext<FirebaseContext>({
  firebase: null as unknown as FirebaseApp,
  auth: null as unknown as Auth,
  db: null as unknown as Firestore,
  functions: null as unknown as Functions,
  storage: null as unknown as FirebaseStorage,
  messaging: null as unknown as Messaging,
});
const FirebaseContext: FirebaseContext = {
  firebase: {} as unknown as FirebaseApp,
  auth: {} as unknown as Auth,
  db: {} as unknown as Firestore,
  functions: {} as unknown as Functions,
  storage: {} as unknown as FirebaseStorage,
  messaging: {} as unknown as Messaging,
};

function FirebaseContextProvider({
  app,
  auth,
  db,
  functions,
  storage,
  messaging,
  children,
}: {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  functions: Functions;
  storage: FirebaseStorage;
  messaging: Messaging;
  children: ReactNode;
}) {
  FirebaseContext.firebase = app;
  FirebaseContext.auth = auth;
  FirebaseContext.db = db;
  FirebaseContext.functions = functions;
  FirebaseContext.storage = storage;
  FirebaseContext.messaging = messaging;

  return (
    <Context.Provider
      value={{ firebase: app, auth, db, functions, storage, messaging }}
    >
      {children}
    </Context.Provider>
  );
}

function useFirebaseContext() {
  return useContext(Context);
}

export { FirebaseContext, FirebaseContextProvider, useFirebaseContext };
