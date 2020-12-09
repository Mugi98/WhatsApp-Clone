import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGmyLvegH3AohRM3i0CLxbyUJrFg0yeyA",
    authDomain: "whatsapp-clone-297dd.firebaseapp.com",
    projectId: "whatsapp-clone-297dd",
    storageBucket: "whatsapp-clone-297dd.appspot.com",
    messagingSenderId: "547841815129",
    appId: "1:547841815129:web:2db5845bc25a1b1b383748",
    measurementId: "G-93QRD8V3C4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;