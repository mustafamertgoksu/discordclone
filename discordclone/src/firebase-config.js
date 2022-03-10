import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "api key is here",
  authDomain: "discordfullclone.firebaseapp.com",
  projectId: "discordfullclone",
  storageBucket: "discordfullclone.appspot.com",
  messagingSenderId: "712444878020",
  appId: "app id is here",
  measurementId: "G-6X6Z8B5F7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
