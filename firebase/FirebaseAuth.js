import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";


export const singIn = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}