
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUwz-6UUJoAEfCUqnJVUy_sbQOC6d2ftI",
  authDomain: "proyecto-react-2d8ad.firebaseapp.com",
  projectId: "proyecto-react-2d8ad",
  storageBucket: "proyecto-react-2d8ad.appspot.com",
  messagingSenderId: "964467243172",
  appId: "1:964467243172:web:8de4380f8bdab81aaa4e31"
};




const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

