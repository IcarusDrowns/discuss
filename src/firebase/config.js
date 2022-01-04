import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCar6GM87c2UA-gb9-svacj-jzv3KJ-x5E",
  authDomain: "projectmanagement-826fb.firebaseapp.com",
  projectId: "projectmanagement-826fb",
  storageBucket: "projectmanagement-826fb.appspot.com",
  messagingSenderId: "518315173907",
  appId: "1:518315173907:web:3247b9e7696577512337e6",
};
firebase.initializeApp(firebaseConfig); //initialising the application @Amritanshu

//initialising the services
const projectFirestore = firebase.firestore(); //for database
const projectAuth = firebase.auth(); // for authentication
const projectStorage = firebase.storage(); //storing (display picture)
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
