// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsurg-odICvu6rPUwgRlTk3RdqjTFbpOU",
  authDomain: "prepai-21f1a.firebaseapp.com",
  projectId: "prepai-21f1a",
  storageBucket: "prepai-21f1a.firebasestorage.app",
  messagingSenderId: "259954817361",
  appId: "1:259954817361:web:c1d392618f85bb0907bb70",
  measurementId: "G-5M3BP5DKH3"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)