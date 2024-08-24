// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgIY5qmE5kyi9e6PXJ9lWihXlgi7JMaU4",
  authDomain: "datosclientes-c2ebf.firebaseapp.com",
  projectId: "datosclientes-c2ebf",
  storageBucket: "datosclientes-c2ebf.appspot.com",
  messagingSenderId: "517329795079",
  appId: "1:517329795079:web:e5bf8f1c9b292b08afd2a2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
