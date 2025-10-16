// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdM3FlTTfc-oHHKIH-iYv-eH50cgmcEdk",
  authDomain: "onlinestore-7d5f4.firebaseapp.com",
  projectId: "onlinestore-7d5f4",
  storageBucket: "onlinestore-7d5f4.firebasestorage.app",
  messagingSenderId: "396226542637",
  appId: "1:396226542637:web:195bb8c0e7f5bc92020ca4",
  measurementId: "G-XPKDS78FZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
