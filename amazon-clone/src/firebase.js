import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmhDZ5ShW5_ZH2eXAxfc1eQvj_kjAcAyg",
  authDomain: "clone-827bb.firebaseapp.com",
  projectId: "clone-827bb",
  storageBucket: "clone-827bb.appspot.com",
  messagingSenderId: "355207277575",
  appId: "1:355207277575:web:8e9fa4ebf4496d2738cea2",
  measurementId: "G-J2JMKR072E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }