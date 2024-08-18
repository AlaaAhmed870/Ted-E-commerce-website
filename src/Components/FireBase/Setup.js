
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBudDI2h1XNy3A_8-rw1AMhs3QLC4c3EZs",
  authDomain: "ted-website-b2f42.firebaseapp.com",
  projectId: "ted-website-b2f42",
  storageBucket: "ted-website-b2f42.appspot.com",
  messagingSenderId: "325276343993",
  appId: "1:325276343993:web:2e3da53259af2337264568"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)