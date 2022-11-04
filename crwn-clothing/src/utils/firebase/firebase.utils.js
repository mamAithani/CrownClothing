// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth
        ,GoogleAuthProvider
        ,signInWithPopup 
        ,createUserWithEmailAndPassword
        ,signInWithEmailAndPassword
        ,signOut,
        onAuthStateChanged
      } from 'firebase/auth'; 

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx1hgA7dOWByoNSqMmXmSlclLUxs3LDzg",
  authDomain: "crwn-clothing-9a9ef.firebaseapp.com",
  projectId: "crwn-clothing-9a9ef",
  storageBucket: "crwn-clothing-9a9ef.appspot.com",
  messagingSenderId: "372306647629",
  appId: "1:372306647629:web:f4d7b7fbf64e05d383da04",
  measurementId: "G-BKWBF5D1J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Using Google Auth Provider 
/* BEGIN */
const auth  = getAuth(app);
const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
    prompt: 'select_account',
  });

export const signInWithGooglePopUp = () =>  signInWithPopup(auth, googleprovider);
/* END */

// Connecting to the database. 
/* FireStore Database. */
// https://crwn-live-clothing-app.herokuapp.com/signin
// https://firebase.google.com/docs/firestore/data-model

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})  => {
     if (!userAuth) return;
      const userdocRef =  doc(db, 'users', userAuth.uid);   // get the document ,google creates one if not exist 
      //console.log( userdocRef ); 
      const userSnapshot =  await getDoc(userdocRef);  //  read the document 
      //console.log( userSnapshot)
      const createdAt = new Date();
      const { displayName, email } = userAuth;  

      if (!userSnapshot.exists()) {
              try{ 
                //console.log( additionalInformation );
                //console.log ( {displayName, email, createdAt,...additionalInformation});
                await setDoc(userdocRef, {displayName, email, createdAt,...additionalInformation}); //save the doc.
              } 
              catch(error){ 
                console.log(error); 
              }
      }
      return userdocRef;
};
  
export const Register = async(email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async(email, password) => {
  if (!email || !password) return; 
  return await signInWithEmailAndPassword( auth, email, password); 
};

export const signOutUser =async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

