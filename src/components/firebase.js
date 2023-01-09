import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMbAXgqXwb3srQcXzsURWgi-8s2iItm9g",
  authDomain: "linkdin-clone-16oct2022.firebaseapp.com",
  projectId: "linkdin-clone-16oct2022",
  storageBucket: "linkdin-clone-16oct2022.appspot.com",
  messagingSenderId: "28548759062",
  appId: "1:28548759062:web:f48b0a4ae4aa1fc389ff37",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
