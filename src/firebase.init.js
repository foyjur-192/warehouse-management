// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJowe8YU5Fg1RRugw_gSxaZE-TfX7mGI",
  authDomain: "furniture-stock-8d494.firebaseapp.com",
  projectId: "furniture-stock-8d494",
  storageBucket: "furniture-stock-8d494.appspot.com",
  messagingSenderId: "74406579572",
  appId: "1:74406579572:web:c59a35c043e38b67c03021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
export default auth;