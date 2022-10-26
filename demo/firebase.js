import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVX3Pir46x6gj8pAzoTESEEAEGhn91MDw",
    authDomain: "salt-week7-day2.firebaseapp.com",
    projectId: "salt-week7-day2",
    storageBucket: "salt-week7-day2.appspot.com",
    messagingSenderId: "917494022976",
    appId: "1:917494022976:web:0a4a6009222d0b70f3b0a5"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebase.storage();
export { db, auth, storage };