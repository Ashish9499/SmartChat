import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCm-BB0X-XMR0advb4iPTwDysopzqu__AE",
    authDomain: "smartchat-25bbe.firebaseapp.com",
    projectId: "smartchat-25bbe",
    storageBucket: "smartchat-25bbe.appspot.com",
    messagingSenderId: "232787391615",
    appId: "1:232787391615:web:a8481dff035668a9b03b4a"
  }).auth();