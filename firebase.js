import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfVrIg1_5258GJiFSyBWH374jLEBMFJf4",
  authDomain: "linedemo-69183.firebaseapp.com",
  projectId: "linedemo-69183",
  storageBucket: "linedemo-69183.appspot.com",
  messagingSenderId: "664493441623",
  appId: "1:664493441623:web:2ca57c574e5014f1dc1912"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };