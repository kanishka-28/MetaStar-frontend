// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAnOjRxX50Br8A9vcx53bnrf55Nm8lJdE",
  authDomain: "metastar-823ce.firebaseapp.com",
  projectId: "metastar-823ce",
  storageBucket: "metastar-823ce.appspot.com",
  messagingSenderId: "804222602901",
  appId: "1:804222602901:web:9936c4f6e2ad41fc91159c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth};