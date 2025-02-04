// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  apiKey: "AIzaSyB5-eObxCo91yMCEOXkE7JuWBkl-FUFUDM",
  authDomain: "netflix-gpt-249ce.firebaseapp.com",
  projectId: "netflix-gpt-249ce",
  storageBucket: "netflix-gpt-249ce.firebasestorage.app",
  messagingSenderId: "39572555969",
  appId: "1:39572555969:web:32613533afd8e81a13ec40",
  measurementId: "G-EVX6RX4648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();