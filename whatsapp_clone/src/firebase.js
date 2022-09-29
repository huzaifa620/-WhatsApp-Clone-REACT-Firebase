import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC84iTfGpMpBzXIukWuiZLuqJo7htvPUxE",
    authDomain: "whatsapp-mern-ede10.firebaseapp.com",
    projectId: "whatsapp-mern-ede10",
    storageBucket: "whatsapp-mern-ede10.appspot.com",
    messagingSenderId: "835064394676",
    appId: "1:835064394676:web:855f4510838dfb71a6f8e1",
    measurementId: "G-RT2DQJEHYY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;