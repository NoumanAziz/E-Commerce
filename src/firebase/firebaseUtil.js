import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBY1o7Ur9hq5czIeCrOA_ag8PcWKCkPWwQ",
        authDomain: "e-shop-choice.firebaseapp.com",
        databaseURL: "https://e-shop-choice.firebaseio.com",
        projectId: "e-shop-choice",
        storageBucket: "e-shop-choice.appspot.com",
        messagingSenderId: "987976953272",
        appId: "1:987976953272:web:99d7efb312a18c3440734d",
        measurementId: "G-2JY9KH1EM3"
      };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for service providers exported in signin form 

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//     'prompt': 'select_account'
// })


// export const googleSignin  = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         provider.setCustomParameters({  
//         'prompt': 'select_account'
//         })
//         auth.signInWithPopup(provider)};


// export const facebookSignin = () =>{
//         const provider = new firebase.auth.FacebookAuthProvider();
//         provider.setCustomParameters({
//             'display': 'popup'
//             // 'prompt':'select_account'
//         })
//         auth.signInWithPopup(provider)

// }
// const provider = new firebase.auth.FacebookAuthProvider();
// provider.setCustomParameters({
//     'dispaly': 'popup'
// })

// export const facebookSignin = () => auth.signInWithPopup(provider)


// react firebaseui config file 

export const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => true
    }
  }


//for user authentication with fire store exported in appjs

  export const createUserProfile = async (userAuth , additionalData)=>{
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log('snap shot', snapShot) ;
  
    if(!snapShot.exists){
      const {displayName , email, photoURL} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
                            displayName,
                            email,
                            createdAt,
                            photoURL,
                            ...additionalData
                          })
      } catch (error) {
        console.log('Error Creating Profile', error.message)
      }
    }
  return userRef;
  }
  
  

export default firebase;