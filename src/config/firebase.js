import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyitJBLRIbR8xJPO6q0tvNSt2Xc2HwFrY",
  authDomain: "english-pl.firebaseapp.com",
  databaseURL: "https://english-pl.firebaseio.com",
  projectId: "english-pl",
  storageBucket: "",
  messagingSenderId: "74475398060",
  appId: "1:74475398060:web:3364fae5d1d4b26d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
