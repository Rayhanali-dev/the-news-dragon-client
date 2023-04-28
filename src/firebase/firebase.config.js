// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp-KkJikceVHIAdYWndg1NM4mtqzjaTGU",
  authDomain: "the-news-dragon-24b94.firebaseapp.com",
  projectId: "the-news-dragon-24b94",
  storageBucket: "the-news-dragon-24b94.appspot.com",
  messagingSenderId: "903298719924",
  appId: "1:903298719924:web:c9560747bf1cb5783db7e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;