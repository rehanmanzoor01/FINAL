import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, setDoc, deleteDoc, updateDoc, onSnapshot, query, orderBy, getDoc, limit, where, enableMultiTabIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { 
    getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCphPy1JaNxRhMxh2cXbOb5Hkg41d4sJ74",
    authDomain: "nundresh-cold-store.firebaseapp.com",
    projectId: "nundresh-cold-store",
    storageBucket: "nundresh-cold-store.firebasestorage.app",
    messagingSenderId: "599279861566",
    appId: "1:599279861566:web:901716cd7a55b8703bb66f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
enableMultiTabIndexedDbPersistence(db).catch((err) => {
    console.warn("Firestore persistence error:", err.code);
});
const auth = getAuth(app);
const storage = getStorage(app);

export { 
    app, db, auth, storage, 
    collection, addDoc, serverTimestamp, getDocs, doc, setDoc, deleteDoc, updateDoc, onSnapshot, query, orderBy, getDoc, limit, where,
    signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence,
    ref, uploadBytesResumable, getDownloadURL, deleteObject 
};
