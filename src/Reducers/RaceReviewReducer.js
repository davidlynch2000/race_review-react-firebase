const initState = {
    raceReviews:[
        {id:1,title:'Captex 2014', content:'Keith Got Run Over By A MotorCycle',author:'D-Ran Is-Sore(ish) Wrecks', date:new Date()},
        {id:2,title:'Cap 10K 2018', content:"I'm a big believer in... evaporative cooling",author:'D-Ran Is-Sore(ish) Wrecks', date:new Date()},
        {id:3,title:'Trifecta 2014', content:"Which way should we go?",author:'D-Ran Is-Sore(ish) Wrecks', date:new Date()},
    ],
};

const raceReviewReducer = (state = initState,action) =>{
    return state;
}

export default raceReviewReducer;