import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMHTz9eLnkei4IshPgqskweDXdx-BiOR8",
    authDomain: "ecommerce-5f648.firebaseapp.com",
    projectId: "ecommerce-5f648",
    storageBucket: "ecommerce-5f648.appspot.com",
    messagingSenderId: "865214977845",
    appId: "1:865214977845:web:e60726f656dcae50059e7c",
    measurementId: "G-469FYGZBGJ"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword};