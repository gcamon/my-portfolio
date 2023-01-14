import firebase from "firebase"

const firebaseConfig = {
    apiKey: "xxxxxx",
    authDomain: "esut-alumni.firebaseapp.com",
    projectId: "esut-alumni",
    storageBucket: "esut-alumni.appspot.com",
    messagingSenderId: "xxxxx",
    appId: "7899000"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, db, storage };

