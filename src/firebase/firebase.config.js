
// import { initializeApp } from "firebase/app";
// import {getAuth} from"firebase/auth"

// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId

// };


// const app = initializeApp(firebaseConfig);
// const myAuth = getAuth(app)
// export default myAuth

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6LAYIUvW_VN-IHrFJlO1OcV3WBP4Szxg",
  authDomain: "to-do-8ea27.firebaseapp.com",
  projectId: "to-do-8ea27",
  storageBucket: "to-do-8ea27.appspot.com",
  messagingSenderId: "608799474054",
  appId: "1:608799474054:web:cf74f938b7609ca9802c07"
};

const app = initializeApp(firebaseConfig);
const myAuth = getAuth(app)
export default myAuth
