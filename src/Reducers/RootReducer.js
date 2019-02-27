import authReducer from './AuthReducer';
import raceReviewReducer from './RaceReviewReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';


const rootReducer = combineReducers({
    auth:authReducer,
    raceReviews:raceReviewReducer,
    firestore: firestoreReducer,
});

export default rootReducer;