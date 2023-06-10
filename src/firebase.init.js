// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHcBXqcsKme1JN9wOMk3naz3USo01qn4",
  authDomain: "allyshop-96cc6.firebaseapp.com",
  projectId: "allyshop-96cc6",
  storageBucket: "allyshop-96cc6.appspot.com",
  messagingSenderId: "481825813989",
  appId: "1:481825813989:web:32f04779403d9b075e2b0c",
  measurementId: "G-E1QJCD6QM4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

export default auth;