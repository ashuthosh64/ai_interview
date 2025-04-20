// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTYoR82P2Btxo2MCu4k-HOJs4UybWwh1k",
    authDomain: "mockprep-e9bf2.firebaseapp.com",
    projectId: "mockprep-e9bf2",
    storageBucket: "mockprep-e9bf2.firebasestorage.app",
    messagingSenderId: "1057225758919",
    appId: "1:1057225758919:web:7c6dac564a9ae1865806e2",
    measurementId: "G-QBTZEVX3YR"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);