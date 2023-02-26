// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBcW7jHzdhjatDhg9TAoE1cfzWdWwb6cs",
  authDomain: "test-auth-1db4a.firebaseapp.com",
  projectId: "test-auth-1db4a",
  storageBucket: "test-auth-1db4a.appspot.com",
  messagingSenderId: "271542465541",
  appId: "1:271542465541:web:b30eb7607fa2ffb18f186c",
  measurementId: "G-YH8LEX66GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)