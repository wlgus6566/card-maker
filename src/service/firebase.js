import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEki,
    authDomain: process.env.REACT_APP_FIREBASE_DB_URL,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);
export default firebaseAPP;