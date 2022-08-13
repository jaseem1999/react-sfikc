import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDMfH-e9gJybmS07qGHu1z2PrL6puA-tbY",
  authDomain: "sfi-mes-kc.firebaseapp.com",
  projectId: "sfi-mes-kc",
  storageBucket: "sfi-mes-kc.appspot.com",
  messagingSenderId: "642197929321",
  appId: "1:642197929321:web:a3e75a6209856451e0d1f8",
  measurementId: "G-TZJY0HXMK2"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

const storage = firebase.storage();

export { db , storage };


