import firebase from "firebase/app";
import "firebase/firestore";

// var firebase = require('firebase/app');
var firebaseConfig = {
    apiKey: "AIzaSyBKDd5xW8xIZC-8-IC8ogGTXhEJbMm6vak",
    authDomain: "first-cloud-messaging-2409b.firebaseapp.com",
    projectId: "first-cloud-messaging-2409b",
    storageBucket: "first-cloud-messaging-2409b.appspot.com",
    messagingSenderId: "1073472020874",
    appId: "1:1073472020874:web:429907ff683eab8668e873",
    measurementId: "G-47DS8G6RLN"
  };
 


const db = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export default db;