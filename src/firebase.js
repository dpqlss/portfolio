import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FITEBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FITEBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FITEBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FITEBASE_APP_ID,
  apiKey: "AIzaSyCRq4TgYUy7vNBRpaavXlWUP93EHzOGYnc",
  authDomain: "portfolio-22efa.firebaseapp.com",
  projectId: "portfolio-22efa",
  storageBucket: "portfolio-22efa.appspot.com",
  messagingSenderId: "952504716879",
  appId: "1:952504716879:web:bfe723597bafce6367e43a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
