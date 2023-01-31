// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0S49xa2wivrVdGdpdRCNSOERI1zfbGYw",
  authDomain: "levitate-bef0d.firebaseapp.com",
  projectId: "levitate-bef0d",
  storageBucket: "levitate-bef0d.appspot.com",
  messagingSenderId: "1061039372239",
  appId: "1:1061039372239:web:14b4f809a76ab519ce84ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth, app}