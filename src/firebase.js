import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC6Ad0sWcVcr--EWqrBMwtTkxzItaJ6qSs",
    authDomain: "social-travel-app-ff3af.firebaseapp.com",
    projectId: "social-travel-app-ff3af",
    storageBucket: "social-travel-app-ff3af.appspot.com",
    messagingSenderId: "947514795779",
    appId: "1:947514795779:web:2ad1ddc45ddf26b48d2b36",
    measurementId: "G-TQR71CBF2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }
