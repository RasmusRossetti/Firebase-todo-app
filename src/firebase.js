import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx3l7fa9SDwtjY77i8AHrlmJaBFjfJa4M",
  authDomain: "todo-app-cp-cd558.firebaseapp.com",
  databaseURL: "https://todo-app-cp-cd558-default-rtdb.firebaseio.com",
  projectId: "todo-app-cp-cd558",
  storageBucket: "todo-app-cp-cd558.appspot.com",
  messagingSenderId: "1007052141358",
  appId: "1:1007052141358:web:955a6bd238248c83a7c0bf",
  measurementId: "G-KV497EX83R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
