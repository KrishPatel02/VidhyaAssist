// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMTQrY-6o_OtMtG4HMpGGKuw2JRKskrRk",
  authDomain: "vidhyaassist.firebaseapp.com",
  projectId: "vidhyaassist",
  storageBucket: "vidhyaassist.appspot.com",
  messagingSenderId: "98758324463",
  appId: "1:98758324463:web:53ee6958f2c1efae7b2b1a",
  measurementId: "G-7VVBM9F0JY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
