import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC5Tt31LFFO-ScM1-qYVZOtZVzfI9oJQEU",
  authDomain: "curious-paper-co.firebaseapp.com",
  projectId: "curious-paper-co",
  storageBucket: "curious-paper-co.appspot.com",
  messagingSenderId: "370941507475",
  appId: "1:370941507475:web:e7b919606b365930d01a66",
  measurementId: "G-QRB6PD7R66",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user: ', error.message)
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider)
    .then((result) => {})
    .catch((error) => {});

export default firebase;
