import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8acLDdsuOwxtVOWA5lpLCm-4PbNBJXA0",
  authDomain: "crwn-db-38593.firebaseapp.com",
  databaseURL: "https://crwn-db-38593.firebaseio.com",
  projectId: "crwn-db-38593",
  storageBucket: "crwn-db-38593.appspot.com",
  messagingSenderId: "135893560885",
  appId: "1:135893560885:web:48283fd428689cc349cb7c",
  measurementId: "G-H7KPDF8QEN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;