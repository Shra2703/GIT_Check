// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX6cYlhD5lTDVR66ZtWd0ZvegLTh_Cs9A",
  authDomain: "blogging-app-bbd78.firebaseapp.com",
  projectId: "blogging-app-bbd78",
  storageBucket: "blogging-app-bbd78.appspot.com",
  messagingSenderId: "841763508733",
  appId: "1:841763508733:web:cf4685aabc36b5b7f28994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);