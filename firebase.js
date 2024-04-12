import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6SeMme29TKv3DjMzFUxdskc_j1OmmaYA",
    authDomain: "todo-b8d84.firebaseapp.com",
    projectId: "todo-b8d84",
    storageBucket: "todo-b8d84.appspot.com",
    messagingSenderId: "285263677834",
    appId: "1:285263677834:web:3d5e49be60e09ea44a2073"
  };
  
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)