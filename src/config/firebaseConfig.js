import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAzzxSBe_bh9nx8ls9HUrwnBcWbJ5JmCB0",
    authDomain: "race-review-react-firebase.firebaseapp.com",
    databaseURL: "https://race-review-react-firebase.firebaseio.com",
    projectId: "race-review-react-firebase",
    storageBucket: "race-review-react-firebase.appspot.com",
    messagingSenderId: "1039251635995"
};

firebase.initializeApp(config);

export default firebase;