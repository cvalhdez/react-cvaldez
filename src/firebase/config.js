// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdQ56DHrgeAkdBNd4celgOaX7iSAwW9mQ",
  authDomain: "react-cvaldez.firebaseapp.com",
  databaseURL: "https://react-cvaldez-default-rtdb.firebaseio.com",
  projectId: "react-cvaldez",
  storageBucket: "react-cvaldez.appspot.com",
  messagingSenderId: "187672242884",
  appId: "1:187672242884:web:060fad17733d6d67aeb791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)