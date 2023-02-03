// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkK8rCsHJVNfD4bAJG8fGAzFL9_GLlapM",
  authDomain: "college-notes-47.firebaseapp.com",
  projectId: "college-notes-47",
  storageBucket: "college-notes-47.appspot.com",
  messagingSenderId: "927213959167",
  appId: "1:927213959167:web:0b29ece604294369ca99ca",
  measurementId: "G-HJBPC627GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);