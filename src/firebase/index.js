import firebase from 'firebase/app';
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCgohSeqYfzIBjyaFoeMPfxht0DwApLkoU",
    authDomain: "bloodpressure-a802b.firebaseapp.com",
    projectId: "bloodpressure-a802b",
    storageBucket: "bloodpressure-a802b.appspot.com",
    messagingSenderId: "681426498864",
    appId: "1:681426498864:web:794ab764b375e5e49044f5",
    measurementId: "G-QQEJRQYXV1"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;