// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.  
//
// Usually, you need to fastidiously guard API keys (for example, by 
// setting the keys as environment variables); 
// however, API keys for Firebase services are ok to include in code or checked-in config files.
const firebaseConfig = {
    apiKey: "AIzaSyCVBrw48-Dn_1UxxCX7gBgpNihCuHidO4s",
    authDomain: "skincare-86753.firebaseapp.com",
    projectId: "skincare-86753",
    storageBucket: "skincare-86753.appspot.com",
    messagingSenderId: "310886653971",
    appId: "1:310886653971:web:69093b41512cdc1d6e5fe6",
    measurementId: "G-3M96535EQP"
  };

// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
