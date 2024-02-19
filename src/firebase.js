import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDT9ycdv8B7ZNYOW1FFUSYnKi7gaEd7HCw",
    authDomain: "netflix-clone-20a2d.firebaseapp.com",
    projectId: "netflix-clone-20a2d",
    storageBucket: "netflix-clone-20a2d.appspot.com",
    messagingSenderId: "87901356218",
    appId: "1:87901356218:web:7478d650c0b65bd5978283"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;