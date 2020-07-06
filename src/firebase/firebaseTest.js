import React from 'react';
import firebase from 'firebase/app';       
import 'firebase/firestore';

const firestore = firebase.firestore();
export const fire = ()=>{
const data = firestore.collection(users).doc(W988bOiOs5L76O6tE61e).collection(cart).doc(M8YM7aVU3Sjyn6PBSTMJ);
console.log('cart item ', data)

const data2 = firestore.doc(/users/W988bOiOs5L76O6tE61e/cart/M8YM7aVU3Sjyn6PBSTMJ);
console.log('item 22', data2)

const cartData = firestore.collection(/users/W988bOiOs5L76O6tE61e/cart);
console.log('full cart ', cartData)
}

export default firestore;