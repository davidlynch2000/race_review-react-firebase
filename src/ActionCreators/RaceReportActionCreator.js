export const createRaceReport = (raceReport) =>{
    return (dispatch) => {
            dispatch({type:'CREATE_RACEREPORT',raceReport:raceReport});
        };
}