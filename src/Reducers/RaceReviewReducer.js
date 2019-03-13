const initState = {};

const raceReviewReducer = (state = initState,action) =>{
    switch(action.type){
        case 'EDIT_RACEREPORT':{
            return {
                ...state,
                raceReviews:[...state.raceReviews],
            };
        }
        case 'EDIT_RACEREPORT_ERROR':{
            return state;
        }
        case 'CREATE_RACEREPORT':{
            return {
                ...state,
                raceReviews:[...state.raceReviews,action.raceReport],
            };
        }
        case 'CREATE_RACEREPORT_ERROR':{
            return state;
        }
        default:{
            return state;
        }
    }
}

export default raceReviewReducer;