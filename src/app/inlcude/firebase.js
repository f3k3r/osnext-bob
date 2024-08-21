import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCYVKBvqkqSuEJO69l4pl9aje5xKGeDY7s",
  authDomain: "bob2-efe6f.firebaseapp.com",
  databaseURL: "https://bob2-efe6f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bob2-efe6f",
  storageBucket: "bob2-efe6f.appspot.com",
  messagingSenderId: "94660467016",
  appId: "1:94660467016:web:82c2bcb81b03e2e37ffb7d",
  measurementId: "G-BZXPCQ904Z"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };