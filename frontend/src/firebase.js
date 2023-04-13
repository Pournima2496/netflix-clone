// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8L25vkUNKnL_tOGwLUlyKjzemKDkrf4",
  authDomain: "netflix-clone-41150.firebaseapp.com",
  projectId: "netflix-clone-41150",
  storageBucket: "netflix-clone-41150.appspot.com",
  messagingSenderId: "913284317125",
  appId: "1:913284317125:web:58d3336db4e7da95b115ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)