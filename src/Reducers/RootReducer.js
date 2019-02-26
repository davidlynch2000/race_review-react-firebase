import authReducer from './AuthReducer';
import raceReviewReducer from './RaceReviewReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth:authReducer,
    raceReviews:raceReviewReducer,
});

export default rootReducer;