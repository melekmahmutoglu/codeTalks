import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWVckEsk7QpVkZndJcwoENp7mIINvL464",
    authDomain: "codetalks-9338f.firebaseapp.com",
    projectId: "codetalks-9338f",
    storageBucket: "codetalks-9338f.appspot.com",
    messagingSenderId: "565747141810",
    appId: "1:565747141810:web:9a4411d42b4b3cbbe38dab"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)


