import authReducer from './AuthReducer';
import raceReviewReducer from './RaceReviewReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth:authReducer,
    raceReviews:raceReviewReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;