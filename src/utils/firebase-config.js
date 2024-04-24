
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxiW8dkAfs98W9Gcji29xLNs_3H8LIQg4",
  authDomain: "johnflix-843e3.firebaseapp.com",
  projectId: "johnflix-843e3",
  storageBucket: "johnflix-843e3.appspot.com",
  messagingSenderId: "1075165913045",
  appId: "1:1075165913045:web:2d1786a99bedb65685e75c",
  measurementId: "G-JSDJCXZ9HP",
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
