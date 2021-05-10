import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBP4xeL2JsxEJiTmyk55EoN5FLuihXMoxw",
    authDomain: "book-santa-fb384.firebaseapp.com",
    projectId: "book-santa-fb384",
    storageBucket: "book-santa-fb384.appspot.com",
    messagingSenderId: "155209176051",
    appId: "1:155209176051:web:5715cbfc41723da70cf886"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();