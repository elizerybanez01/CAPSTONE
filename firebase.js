// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAidTEv40n7YXzDojKCP2WO9ifi-n-N1GY",
  authDomain: "evissa-e-community.firebaseapp.com",
  projectId: "evissa-e-community",
  storageBucket: "evissa-e-community.appspot.com",
  messagingSenderId: "407448688902",
  appId: "1:407448688902:web:4010dd5d57bc3103a56687",
  measurementId: "G-2N4HMXGSR1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
