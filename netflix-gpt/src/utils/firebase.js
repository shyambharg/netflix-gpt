// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXddRcRM1ByNOS3TRM0hwNYS-HGrNiDcE",
  authDomain: "netflix-clone-e60c3.firebaseapp.com",
  projectId: "netflix-clone-e60c3",
  storageBucket: "netflix-clone-e60c3.firebasestorage.app",
  messagingSenderId: "104452022013",
  appId: "1:104452022013:web:c2bf9e3295107c01516894",
  measurementId: "G-XKYHPHMZB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;