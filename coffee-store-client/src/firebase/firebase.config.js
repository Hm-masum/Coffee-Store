// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwFGVoLnOvYFhpgS1RByFlzZUfCV9L97I",
  authDomain: "coffee-stored-c96cd.firebaseapp.com",
  projectId: "coffee-stored-c96cd",
  storageBucket: "coffee-stored-c96cd.appspot.com",
  messagingSenderId: "319387824989",
  appId: "1:319387824989:web:2f9c04b5134659b9c22eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;