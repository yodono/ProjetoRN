import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpuDZrKSaCfiFZrlYMU8ewFR5SNoUN9P8",
    authDomain: "projetorn-fb-db50b.firebaseapp.com",
    projectId: "projetorn-fb-db50b",
    storageBucket: "projetorn-fb-db50b.appspot.com",
    messagingSenderId: "548418273375",
    appId: "1:548418273375:web:aa493d303dc496bdbb9bea",
    measurementId: "G-3B7522VECT"
  };
  
var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();