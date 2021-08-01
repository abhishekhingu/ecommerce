/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyDndWkB3sROcXj5aAXSSiLyGOtCuG5ptHI',
  authDomain: 'crwn-db-20f8a.firebaseapp.com',
  projectId: 'crwn-db-20f8a',
  storageBucket: 'crwn-db-20f8a.appspot.com',
  messagingSenderId: '1007816822170',
  appId: '1:1007816822170:web:b43aef184be8847952fe23',
  measurementId: 'G-8NNC82HPXE',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
