import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9I8hjW7oktMCYYEpLYvmD8yuGU9wN5-I",
  authDomain: "clothesecomers.firebaseapp.com",
  projectId: "clothesecomers",
  storageBucket: "clothesecomers.appspot.com",
  messagingSenderId: "705363103760",
  appId: "1:705363103760:web:7e3a37ff5aef2a8b61ba95",
}

const firebase = initializeApp(firebaseConfig)
console.log(firebase)

//Auth
const googleProvider = new GoogleAuthProvider()
googleProvider.getCustomParameters({
  params: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//Db
const db = getFirestore()

export const createDocumentForAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const { displayName, email } = userAuth

  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const onSnapshot = await getDoc(userDocRef)
  console.log(onSnapshot)
  console.log(onSnapshot.exists())

  if (!onSnapshot.exists()) {
    // Utilizați nume de variabile diferite aici pentru a evita conflictul de nume
    const newDisplayName = displayName
    const newEmail = email
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        email: newEmail,
        displayName: newDisplayName,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
