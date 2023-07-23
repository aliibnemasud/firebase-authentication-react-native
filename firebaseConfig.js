import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrN6UT_nL1qLtW2iX2HlWe3Ky4Vk07bEU",
  authDomain: "conscious-40190.firebaseapp.com",
  projectId: "conscious-40190",
  storageBucket: "conscious-40190.appspot.com",
  messagingSenderId: "808681759250",
  appId: "1:808681759250:web:ad1211ad0f21c9d22f6ecb"
};

/* const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID,
}; */



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth}





