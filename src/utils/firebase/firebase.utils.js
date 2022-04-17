import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPBRR0lJpaIU-xSUzOf8ZYb3tCMC9H4oc",
    authDomain: "curious-paper-co-638cc.firebaseapp.com",
    projectId: "curious-paper-co-638cc",
    storageBucket: "curious-paper-co-638cc.appspot.com",
    messagingSenderId: "232471040073",
    appId: "1:232471040073:web:398ea38ed536252e8c2f98"
  };

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooogleRedirect = () => signInWithRedirect (auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;

    const userDocRef = doc (db, 'users', userAuth.uid );

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });

        } catch (error) {
            console.log('Error creating user: ', error.message)
        };
    };

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword (auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword (auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);