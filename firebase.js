import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDCgim03S73RBVvOOL7GS8K_kJUuGU0c9Y",
    authDomain: "inventory-management-app-3336c.firebaseapp.com",
    projectId: "inventory-management-app-3336c",
    storageBucket: "inventory-management-app-3336c.appspot.com",
    messagingSenderId: "68960865240",
    appId: "1:68960865240:web:bb567c12c32e8b303640ad"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}