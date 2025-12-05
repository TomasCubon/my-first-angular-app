// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmI3wKUyYUcYnhtr4lVlfKFnhbJ3wPkg8",
  authDomain: "quest-owerflow-4bd15.firebaseapp.com",
  projectId: "quest-owerflow-4bd15",
  storageBucket: "quest-owerflow-4bd15.firebasestorage.app",
  messagingSenderId: "509072498922",
  appId: "1:509072498922:web:ff82b5600d27c1afc2b793",
  measurementId: "G-3QXQNY5G0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);