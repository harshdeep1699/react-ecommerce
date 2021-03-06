import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBtyh8LWkUzRmKeD9B0umD9MX0t5c-1Ijg",
    authDomain: "myreact-website.firebaseapp.com",
    databaseURL: "https://myreact-website.firebaseio.com",
    projectId: "myreact-website",
    storageBucket: "myreact-website.appspot.com",
    messagingSenderId: "493302898211",
    appId: "1:493302898211:web:dcd1a70ca7dd0c7e039b96",
    measurementId: "G-ZTCC74K95Z"
  };

  export const createUserDocument= async(user)=>{
    if(!user) return;
    const dat=(await firestore.doc(`users/${user.uid}`).get());
    if(!dat.exists)
    {
      const displayName=user.displayName;
      const email= user.email;
      const date= new Date();
      await firestore.doc(`users/${user.uid}`).set({
        displayName,
        date,
        email
      }  
      )
    }
  
  }

firebase.initializeApp(config);



export const auth=firebase.auth();
export const firestore= firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle=()=>firebase.auth().signInWithPopup(provider);

export default firebase;