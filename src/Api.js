import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';
/* variavel que inicia a firebase */

const firebaseApp = firebase.initializeApp(firebaseConfig);
const bd = firebaseApp.firestore();

export default {
  googlelogar: async () => {
    const provider = new firebase.auth.googleAuthProvider();
    let result = await firebase.auth().signInWithPopup()
    return result;

  }
}
