import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCJQF13Fs7cHYPhYGaEwO3yxaCO4gfNCr8",
  authDomain: "drive-clone-fe7b2.firebaseapp.com",
  projectId: "drive-clone-fe7b2",
  storageBucket: "drive-clone-fe7b2.appspot.com",
  messagingSenderId: "295854392305",
  appId: "1:295854392305:web:08be71fd735bba100f3a50"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }