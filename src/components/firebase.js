// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu apikey",
  authDomain: "tu authDomain",
  projectId: "tu projectID",
  storageBucket: "tu storageBucket",
  messagingSenderId: "tu messagingSenderID",
  appId: "tu appID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
