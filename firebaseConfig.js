import firebase, { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcB_PDi3H9nhn4g3ClcFJuGG4GlfjSvwQ",
    authDomain: "my-project-c36fd.firebaseapp.com",
    projectId: "my-project-c36fd",
    storageBucket: "my-project-c36fd.appspot.com",
    messagingSenderId: "713822271449",
    appId: "1:713822271449:web:784ee1d632070d381f8bc8",
    measurementId: "G-67QVT6QJDH"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
