export const createRaceReport = (raceReport) =>{
    return (dispatch,getState,{getFirebase, getFirestore} ) => {
            const firestore = getFirestore();
            const username = getState().firebase.profile.username;
            const userid = getState().firebase.auth.uid;
            firestore.collection('racereports').add({
                ...raceReport,
                author:username,
                authorid:userid,
                created: new Date(),
            })
            .then(()=>{
                dispatch({type:'CREATE_RACEREPORT',raceReport:{...raceReport,id:12,created:new Date()},});
            })
            .catch((err)=>{
                dispatch({type:'CREATE_RACEREPORT_ERROR'});
            });

        };
}

export const editRaceReport = (raceReport,raceReportId) =>{
    return (dispatch,getState,{getFirebase, getFirestore} ) => {
            const firestore = getFirestore();
            const username = getState().firebase.profile.username;
            const userid = getState().firebase.auth.uid;
            firestore.doc(`racereports/${raceReportId}`).update({
                ...raceReport,
                author:username,
                authorid:userid,
                created: new Date(),                
            })
            .then(()=>{
                dispatch({type:'EDIT_RACEREPORT',raceReport:{...raceReport,created:new Date()},});
            })
            .catch((err)=>{
                dispatch({type:'EDIT_RACEREPORT_ERROR'});
            });
        };
}

export const deleteRaceReport = (raceReportId) =>{
    return (dispatch,getState,{getFirestore} ) => {
            const firestore = getFirestore();
            firestore.doc(`racereports/${raceReportId}`).delete()
            .then(()=>{
                dispatch({type:'DELETE_RACEREPORT'});
            })
            .catch((err)=>{
                dispatch({type:'DELETE_RACEREPORT_ERROR'});
            });
        };
}