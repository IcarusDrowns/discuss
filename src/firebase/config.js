import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
firebase.initializeApp(firebaseConfig); //initialising the application @Amritanshu

//initialising the services
const projectFirestore = firebase.firestore(); //for database
const projectAuth = firebase.auth(); // for authentication
const projectStorage = firebase.storage(); //storing (display picture)
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
