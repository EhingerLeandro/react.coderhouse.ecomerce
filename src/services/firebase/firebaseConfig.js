// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVRvbxIOwDREY-ecDwZbhLoCBRfIKXl6o",
  authDomain: "project-coder-house-leandro.firebaseapp.com",
  projectId: "project-coder-house-leandro",
  storageBucket: "project-coder-house-leandro.appspot.com",
  messagingSenderId: "373265537824",
  appId: "1:373265537824:web:b4bc95e64016f94b8c1545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);