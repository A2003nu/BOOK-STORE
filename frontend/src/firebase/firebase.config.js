// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoKqnkczwKPBFK4r06tGuYlmF86c7rD3E",
  authDomain: "book-store-7203f.firebaseapp.com",
  projectId: "book-store-7203f",
  storageBucket: "book-store-7203f.appspot.com",
  messagingSenderId: "323604556538",
  appId: "1:323604556538:web:b53d213f9befc4000d7743",
  measurementId: "G-3GCW2NMCTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;