const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createActivity = (activity) =>{
    return admin.firestore().collection('activities').add(activity)
        .then( (doc) => console.log('activity added',doc));
}

exports.racereportcreated = functions.firestore
    .document('racereports/{racereportId}')
    .onCreate(doc => {
        const review = doc.data();
        const activity = {
            content: `New race report posted by ${review.author}!`,
            user: review.author,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
        
        return createActivity(activity);
});

exports.userJoined = functions.auth.user().onCreate(user =>{

    return admin.firestore().collection('users').doc(user.uid).get()
    .then((doc) =>{
        const newUser = doc.data();
        const activity = {
            content:`Welcome to our newest user: ${newUser.username}!`,
            user:newUser.username,
            time:admin.firestore.FieldValue.serverTimestamp(),
        };
        return createActivity(activity);
    })
})

