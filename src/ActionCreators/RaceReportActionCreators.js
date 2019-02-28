export const createRaceReport = (raceReport) =>{
    return (dispatch,getState,{getFirebase, getFirestore} ) => {
            const firestore = getFirestore();
            firestore.collection('racereports').add({
                ...raceReport,
                author:'D-Ran_Is-Sore(ish)/Wrecked',
                authorid:1,
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