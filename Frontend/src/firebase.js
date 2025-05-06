// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatehub-4b15e.firebaseapp.com",
  projectId: "estatehub-4b15e",
  storageBucket: "estatehub-4b15e.firebasestorage.app",
  messagingSenderId: "517174692487",
  appId: "1:517174692487:web:f8585414f4c90d31e50622"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);