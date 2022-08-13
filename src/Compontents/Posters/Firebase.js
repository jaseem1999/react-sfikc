import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from '@firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDMfH-e9gJybmS07qGHu1z2PrL6puA-tbY",
  authDomain: "sfi-mes-kc.firebaseapp.com",
  projectId: "sfi-mes-kc",
  storageBucket: "sfi-mes-kc.appspot.com",
  messagingSenderId: "642197929321",
  appId: "1:642197929321:web:a3e75a6209856451e0d1f8",
  measurementId: "G-TZJY0HXMK2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();