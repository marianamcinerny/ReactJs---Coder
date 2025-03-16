import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQdNayepLalELztm8j1svrY5v1TGo1j4w",
  authDomain: "backend-reactjs-coder.firebaseapp.com",
  projectId: "backend-reactjs-coder",
  storageBucket: "backend-reactjs-coder.firebasestorage.app",
  messagingSenderId: "456391083799",
  appId: "1:456391083799:web:cf0d43edeca7f5090bd952",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
