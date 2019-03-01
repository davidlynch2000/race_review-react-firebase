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