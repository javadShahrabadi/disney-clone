import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVvzC6updUUXIJ7sgz7kFhlZlYiGcOkXo",
  authDomain: "disney-c730a.firebaseapp.com",
  projectId: "disney-c730a",
  storageBucket: "disney-c730a.appspot.com",
  messagingSenderId: "673971395601",
  appId: "1:673971395601:web:aa1d2a9825d0c8da9925b0",
  measurementId: "G-Z35KC7NT8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
