import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCU45ir1H3CiuQFsr5YoNoRxY25HV3HolI",
    authDomain: "ecom-clone-acd71.firebaseapp.com",
    databaseURL: "https://ecom-clone-acd71.firebaseio.com",
    projectId: "ecom-clone-acd71",
    storageBucket: "ecom-clone-acd71.appspot.com",
    messagingSenderId: "1062134133696",
    appId: "1:1062134133696:web:590757799a4da8f5588e25",
    measurementId: "G-MPHBFWYV34"
};

firebase.initializeApp(config)


export const createUserProfileDocument = async (userAuth, additionData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })
        }
        catch (error) {
            console.log('error creating user', error.messsage)
        }
    }
    return userRef
}





export const auth = firebase.auth();
export const firestore = firebase.firestore();





const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase