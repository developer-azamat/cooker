import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGwD1a-YGjocjDs6FJeIZvg2YU9Wg2TKc",
  authDomain: "cooking-project-a16e4.firebaseapp.com",
  projectId: "cooking-project-a16e4",
  storageBucket: "cooking-project-a16e4.appspot.com",
  messagingSenderId: "518403316706",
  appId: "1:518403316706:web:ff0a6020851d5eccecf7bb",
  measurementId: "G-2VSNV04GNT",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const auth = firebase.auth();

export { projectFirestore, auth };