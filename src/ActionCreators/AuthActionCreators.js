export const signInAction = (credentials) =>{
    return ( (dispatch, getState,{getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        )
        .then(() =>{
            dispatch({type:'LOGIN_SUCCESS'});
        })
        .catch((err) =>{
            dispatch({type:'LOGIN_ERROR',err});
        });
    });
}

export const signOutAction = () =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'});  
        })
        .catch(err =>{
            dispatch({type:'LOGOUT_ERROR'});
        });
    };
}

export const signUpAction = (newuser) =>{
    return( (dispatch,getState,{getFirebase,getFirestore}) =>{
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newuser.email,
            newuser.password,
        )
        .then((resp) =>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstname:newuser.firstname,
                lastname:newuser.lastname,
                username:newuser.username,
            })
        })
        .then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'});
        })
        .catch((err) =>{
            dispatch({type:'SIGNUP_ERROR', err});
        })
    });
}