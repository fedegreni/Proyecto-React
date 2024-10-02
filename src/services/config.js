import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-react-2d8ad.firebaseapp.com",
  projectId: "proyecto-react-2d8ad",
  storageBucket: "proyecto-react-2d8ad.appspot.com",
  messagingSenderId: "964467243172",
  appId: "1:964467243172:web:8de4380f8bdab81aaa4e31"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); 
