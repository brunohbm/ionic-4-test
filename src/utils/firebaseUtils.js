import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();