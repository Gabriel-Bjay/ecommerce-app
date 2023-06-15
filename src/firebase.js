import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm6BktZtJ0h2FiyHZSj7_VHT4yAUW6hnM",
  authDomain: "urban-living-109cf.firebaseapp.com",
  projectId: "urban-living-109cf",
  storageBucket: "urban-living-109cf.appspot.com",
  messagingSenderId: "727175894113",
  appId: "1:727175894113:web:5128a8826f47f5eaef4620"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


