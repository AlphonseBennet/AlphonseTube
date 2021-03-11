
import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBu1p_dzxNQ3tsdL4bCof9dl6Uy5h8D_0Y",
    authDomain: "alphonsetube.firebaseapp.com",
    projectId: "alphonsetube",
    storageBucket: "alphonsetube.appspot.com",
    messagingSenderId: "811623177243",
    appId: "1:811623177243:web:bf14f9449e112b013a2cbe",
    measurementId: "G-HTNT7MCRQB"
  });

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {db, storage, auth}