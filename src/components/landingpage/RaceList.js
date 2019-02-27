import React from 'react';
import RaceSummary from '../races/RaceSummary';

const RaceList = (props) =>{
    const reviews = props.raceReviews;
    return(
        <div className='section'>
            {reviews && reviews.map(review=>{
                return(
                    <RaceSummary review={{...review,created:new Date(review.created)}} key={review.id}/>
                );
            })}
        </div>
    );
};

export default RaceList;