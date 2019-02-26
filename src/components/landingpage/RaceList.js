import React from 'react';
import RaceSummary from '../races/RaceSummary';

const RaceList = (props) =>{
    const {raceReviews:reviews} = props.raceReviews;
    return(
        <div className='section'>
            {reviews && reviews.map(review=>{
                return(
                    <RaceSummary review={review} key={review.id}/>
                );
            })}
        </div>
    );
};

export default RaceList;