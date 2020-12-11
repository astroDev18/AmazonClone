// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACYzt7_Kdzk33ZT-BcYj-mjVggDBzAz34",
    authDomain: "ecommercestore-1698e.firebaseapp.com",
    projectId: "ecommercestore-1698e",
    storageBucket: "ecommercestore-1698e.appspot.com",
    messagingSenderId: "523916293492",
    appId: "1:523916293492:web:e40faec4d934c5737fa821",
    measurementId: "G-CL43LKMTSS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };