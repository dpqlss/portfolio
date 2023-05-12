import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FITEBASE_API_KEY,
  authDomain: process.env.REACT_APP_FITEBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FITEBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FITEBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
