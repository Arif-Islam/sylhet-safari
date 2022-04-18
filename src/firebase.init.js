// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfUcH4OkAhxoc5b7xIg29QQ5-D5Qwsisw",
    authDomain: "sylhet-safari.firebaseapp.com",
    projectId: "sylhet-safari",
    storageBucket: "sylhet-safari.appspot.com",
    messagingSenderId: "1067083927883",
    appId: "1:1067083927883:web:85563198ce9a1c27a698ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;