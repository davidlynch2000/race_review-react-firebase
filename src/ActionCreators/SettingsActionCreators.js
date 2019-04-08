export const editUserSettings = (firstName,lastName,userName) =>{
    return((dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore();
        const userid = getState().firebase.auth.uid;
        firestore.doc(`users/${userid}`).update({
            firstname:firstName,
            lastname: lastName,
            username: userName,
        })
        .then(()=>{
            dispatch({type:'EDIT_SETTINGS'});
        })
        .catch((err) =>{
            dispatch({type:'EDIT_SETTINGS_ERROR'});
        });
    });
}
