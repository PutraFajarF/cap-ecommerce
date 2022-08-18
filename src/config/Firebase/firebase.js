import { initializeApp } from "firebase/app";

import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { getFirestore, collection, addDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYsyHUdTFUE335pVtIayyfAIS_vwhcNQ",
  authDomain: "cap-ecommerce.firebaseapp.com",
  projectId: "cap-ecommerce",
  storageBucket: "cap-ecommerce.appspot.com",
  messagingSenderId: "244220925813",
  appId: "1:244220925813:web:92b64370f487a573eda53c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err)
    alert(err.meesage)
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
console.log(auth);

export {
  auth,
  db,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout
};