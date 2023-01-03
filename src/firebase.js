import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDedArQX0u0L3E8IWrjXem47Fu2IfSS6ww",
  authDomain: "clone-c6819.firebaseapp.com",
  projectId: "clone-c6819",
  storageBucket: "clone-c6819.appspot.com",
  messagingSenderId: "162624635948",
  appId: "1:162624635948:web:e8f7dfd2cf52c689217d89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { db, auth, provider, timestamp };
