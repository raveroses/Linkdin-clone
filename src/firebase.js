// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBisb5fmd9sMHIWtJX0j0IVbJ1hVlcaN0",
  authDomain: "auth-yt-9d1b0.firebaseapp.com",
  projectId: "auth-yt-9d1b0",
  storageBucket: "auth-yt-9d1b0.appspot.com",
  messagingSenderId: "483127234825",
  appId: "YOUR_APP_ID", // Replace with your actual appId from Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
