// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZNpHOao7RAZC6i__AGsjyystLZRUsa4g",
  authDomain: "fir-fighter-16fc9.firebaseapp.com",
  projectId: "fir-fighter-16fc9",
  storageBucket: "fir-fighter-16fc9.firebasestorage.app",
  messagingSenderId: "423418300807",
  appId: "1:423418300807:web:97a707640a2c2e2432eb22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);