import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdQ56DHrgeAkdBNd4celgOaX7iSAwW9mQ",
  authDomain: "react-cvaldez.firebaseapp.com",
  projectId: "react-cvaldez",
  storageBucket: "react-cvaldez.appspot.com",
  messagingSenderId: "187672242884",
  appId: "1:187672242884:web:060fad17733d6d67aeb791"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)