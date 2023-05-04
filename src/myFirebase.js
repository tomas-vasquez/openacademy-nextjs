import getConfig from "next/config";
const { publicRuntimeConfig: prc } = getConfig();

//store
import store from "./store";
import {
  setCurrentUser,
  deleteCurrentUser,
} from "./store/setting_store/actions";

//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || prc.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || prc.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID || prc.FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || prc.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID || prc.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID || prc.FIREBASE_APP_ID,
  measurementId:
    process.env.FIREBASE_MEASUREMENT_ID || prc.FIREBASE_MEASUREMENT_ID,
};
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  var user = firebase.auth().currentUser;
  if (user) store.dispatch(setCurrentUser({ ...user._delegate }));
  else store.dispatch(deleteCurrentUser());
});

export default firebase;
