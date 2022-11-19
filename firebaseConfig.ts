// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByhAul7u16FvJJwIbN_mF1h8A7BDmTrgs",
  authDomain: "dont-waste.firebaseapp.com",
  projectId: "dont-waste",
  storageBucket: "dont-waste.appspot.com",
  messagingSenderId: "153609106069",
  appId: "1:153609106069:web:db4a754010c7fb22f8219c",
  measurementId: "G-X89F3TPYXN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
