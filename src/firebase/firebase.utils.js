import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5Tt31LFFO-ScM1-qYVZOtZVzfI9oJQEU",
  authDomain: "curious-paper-co.firebaseapp.com",
  projectId: "curious-paper-co",
  storageBucket: "curious-paper-co.appspot.com",
  messagingSenderId: "370941507475",
  appId: "1:370941507475:web:e7b919606b365930d01a66",
  measurementId: "G-QRB6PD7R66",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {});

export default firebase;
