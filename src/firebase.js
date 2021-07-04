// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH7mSD3F5lsisAJSUSQD01igUM9EZ3UtE",
  authDomain: "jainnetflixclone.firebaseapp.com",
  projectId: "jainnetflixclone",
  storageBucket: "jainnetflixclone.appspot.com",
  messagingSenderId: "5310646510",
  appId: "1:5310646510:web:b18e55e6d081ac670d8bff",
  measurementId: "G-0YR0NW8SMX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
