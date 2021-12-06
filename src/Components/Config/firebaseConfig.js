// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfcCTBEFKF9GFXkp65ObShRnRuHQKdB1E",
  authDomain: "barberia-cdee8.firebaseapp.com",
  projectId: "barberia-cdee8",
  storageBucket: "barberia-cdee8.appspot.com",
  messagingSenderId: "777637724190",
  appId: "1:777637724190:web:d12413c12b499c8524ee0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };