import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUlm1jMtQtltTmbyKRKm4LhFus3A54bUA",
  authDomain: "topicos-cf06a.firebaseapp.com",
  projectId: "topicos-cf06a",
  storageBucket: "topicos-cf06a.appspot.com",
  messagingSenderId: "1043907918317",
  appId: "1:1043907918317:web:8145b8c71c024478228fe4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };