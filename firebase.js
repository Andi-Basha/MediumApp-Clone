// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5rC8kIyxOmOOwnWOQ1WKBrfTYfz-0j-c",
  authDomain: "medium-clone-3ce84.firebaseapp.com",
  projectId: "medium-clone-3ce84",
  storageBucket: "medium-clone-3ce84.appspot.com",
  messagingSenderId: "235605112336",
  appId: "1:235605112336:web:17966fe3daf6521372fc95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth, provider, db}