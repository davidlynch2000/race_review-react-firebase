const initState = {
    raceReviews:[
        {id:1,title:'Captex 2014', summary:'Keith Got Run Over By A MotorCycle',author:'D-Ran_Is-Sore(ish)/Wrecked', created:new Date()},
        {id:2,title:'Cap 10K 2018', summary:"I'm a big believer in... evaporative cooling",author:'D-Ran_Is-Sore(ish)/Wrecked', created:new Date()},
        {id:3,title:'Trifecta 2014', summary:"Which way should we go?",author:'D-Ran_Is-Sore(ish)/Wrecked', created:new Date()},
    ],
};

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