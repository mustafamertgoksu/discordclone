import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFm8nE5S6XsuxMt0VvcsY2YZ1wXJkBJG8",
  authDomain: "discordfullclone.firebaseapp.com",
  projectId: "discordfullclone",
  storageBucket: "discordfullclone.appspot.com",
  messagingSenderId: "712444878020",
  appId: "1:712444878020:web:3944ef4cfbe8d9b17c3d91",
  measurementId: "G-6X6Z8B5F7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);