// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsYg_jDDrR79lLF-MJP89ZqlA-ykUnOBw",
    authDomain: "ai-mock-prep-92aa5.firebaseapp.com",
    projectId: "ai-mock-prep-92aa5",
    storageBucket: "ai-mock-prep-92aa5.firebasestorage.app",
    messagingSenderId: "862406318776",
    appId: "1:862406318776:web:a6614e671f276ecd98324d",
    measurementId: "G-R9764TRXMT"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);