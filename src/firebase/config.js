import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDp9Rk1nIaOiImk4e7CEbOIwoW5qRBkUVg',
  authDomain: 'chat-app-a822e.firebaseapp.com',
  projectId: 'chat-app-a822e',
  storageBucket: 'chat-app-a822e.appspot.com',
  messagingSenderId: '623334597788',
  appId: '1:623334597788:web:ed853646e389338c49f959',
  measurementId: 'G-7H4G5NDJ78',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
