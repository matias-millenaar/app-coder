import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCXXwBnpjRETblU_d936buTrI2CalQSxTo",
    authDomain: "app-coder-react.firebaseapp.com",
    projectId: "app-coder-react",
    storageBucket: "app-coder-react.appspot.com",
    messagingSenderId: "314017084702",
    appId: "1:314017084702:web:0506929c5d0a4168fe450f"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)