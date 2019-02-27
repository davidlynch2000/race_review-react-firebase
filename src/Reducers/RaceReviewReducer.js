const initState = {};

const raceReviewReducer = (state = initState,action) =>{
    switch(action.type){
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