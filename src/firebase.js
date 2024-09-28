import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // Use Realtime Database functions

const firebaseConfig = {
  apiKey: "AIzaSyDjuKLU0MH10MbnlLdVTPIGchEGYq-Loi8",
  authDomain: "vidhya-assist.firebaseapp.com",
  projectId: "vidhya-assist",
  storageBucket: "vidhya-assist.appspot.com",
  messagingSenderId: "481739097525",
  appId: "1:481739097525:web:035ba7066dca8814a0c5fc",
  measurementId: "G-9KWT88NT32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Initialize the Realtime Database

export { db, ref, onValue };
