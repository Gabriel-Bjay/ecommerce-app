// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm6BktZtJ0h2FiyHZSj7_VHT4yAUW6hnM",
  authDomain: "urban-living-109cf.firebaseapp.com",
  projectId: "urban-living-109cf",
  storageBucket: "urban-living-109cf.appspot.com",
  messagingSenderId: "727175894113",
  appId: "1:727175894113:web:5128a8826f47f5eaef4620"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);


