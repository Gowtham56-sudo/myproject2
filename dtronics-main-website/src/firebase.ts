// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbi9eAL4Nw_BVhMRi4OdJkZx0TahmE4IQ",
  authDomain: "dtronics-3ac34.firebaseapp.com",
  projectId: "dtronics-3ac34",
  storageBucket: "dtronics-3ac34.firebasestorage.app",
  messagingSenderId: "810470039902",
  appId: "1:810470039902:web:9c86727e09f1afef76efcf",
  measurementId: "G-E4GRJ99KD5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
