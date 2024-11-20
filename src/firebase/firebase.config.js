// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxgK02z1IX7YFRs6mEcCH9N7IZ71O4rg8",
    authDomain: "winter-donation-b573a.firebaseapp.com",
    projectId: "winter-donation-b573a",
    storageBucket: "winter-donation-b573a.firebasestorage.app",
    messagingSenderId: "130606910192",
    appId: "1:130606910192:web:650dfabeb71c5b6d4ad035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;