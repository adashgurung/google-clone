import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEwKEIvaSpzw7bjwn9JycLjMkG3ldH_yk",
  authDomain: "clone-c3787.firebaseapp.com",
  projectId: "clone-c3787",
  storageBucket: "clone-c3787.appspot.com",
  messagingSenderId: "813783113621",
  appId: "1:813783113621:web:a4e16008c65661a8e1209c",
  measurementId: "G-Z7YRZDS7XL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
