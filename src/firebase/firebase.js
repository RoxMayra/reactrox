// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDocs, query, where, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqXaINthlyJvfzSOUwPzkoPU-AS95WEG0",
  authDomain: "proyect-approx.firebaseapp.com",
  projectId: "proyect-approx",
  storageBucket: "proyect-approx.appspot.com",
  messagingSenderId: "200737841704",
  appId: "1:200737841704:web:8ef8498ac71833b80dcb1d",
  measurementId: "G-H5FQCNVTB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export const db = getFirestore(App);
const storage = getStorage(App);