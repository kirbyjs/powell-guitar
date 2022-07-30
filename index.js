// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvBE7GRsq_wy9dxgyFiNO15JxDuQXcMF4",
  authDomain: "powellguitar-debe0.firebaseapp.com",
  projectId: "powellguitar-debe0",
  storageBucket: "powellguitar-debe0.appspot.com",
  messagingSenderId: "65012745796",
  appId: "1:65012745796:web:8aa2e8b12e892183139e11",
  measurementId: "G-7HET5GG3ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
