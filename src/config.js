import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhQrDM4NAKClWCRL-gaNwh_ofZhx3q3MY",
  authDomain: "chat-14916.firebaseapp.com",
  databaseURL: "https://chat-14916.firebaseio.com",
  projectId: "chat-14916",
  storageBucket: "chat-14916.appspot.com",
  messagingSenderId: "34977329301",
  appId: "1:34977329301:web:e4ae0094e00204b2c82b9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// our database

const db = firebase.database();

export default db;
