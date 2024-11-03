import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBLEXc2BX8VZYKCB8hXmMQMneIeUX53sJQ",
  authDomain: "app-91f85.firebaseapp.com",
  projectId: "app-91f85",
  storageBucket: "app-91f85.appspot.com",
  messagingSenderId: "91695465",
  appId: "1:91695465:web:8cd27b5acdcb4ddaf435f8",
  databaseURL: "https://app-91f85-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
