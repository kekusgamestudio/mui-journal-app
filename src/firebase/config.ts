// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgLiEe80UZpT4fxn0kqXCkerlzyQumzU",
  authDomain: "curso-react-59666.firebaseapp.com",
  projectId: "curso-react-59666",
  storageBucket: "curso-react-59666.appspot.com",
  messagingSenderId: "589612797713",
  appId: "1:589612797713:web:aee430800b5d11c6aec6b0"
};

// Initialize Firebase
export const firebaseApp = initializeApp( firebaseConfig );
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDb = getFirestore( firebaseApp );
