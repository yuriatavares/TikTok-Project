import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAL8QwMp8CwzSvczjpJEaMV6rmn8izxv7E",
  authDomain: "video-e2d0b.firebaseapp.com",
  projectId: "video-e2d0b",
  storageBucket: "video-e2d0b.appspot.com",
  messagingSenderId: "795955292460",
  appId: "1:795955292460:web:2f6530d5b3e7534c22a489",
  measurementId: "G-NCS53M00XJ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;