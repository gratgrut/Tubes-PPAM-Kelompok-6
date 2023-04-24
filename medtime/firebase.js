// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDmSQHfFlfNubh57nbUbLjgbfU0BvCZW4",
  authDomain: "medtime-de870.firebaseapp.com",
  projectId: "medtime-de870",
  storageBucket: "medtime-de870.appspot.com",
  messagingSenderId: "284281296918",
  appId: "1:284281296918:web:b958b746cdedb3001efd37",
  measurementId: "G-QB4VKV03FS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);