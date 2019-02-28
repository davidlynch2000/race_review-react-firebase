import React from 'react';
import RaceSummary from '../races/RaceSummary';
import {Link} from 'react-router-dom';

const RaceList = (props) =>{
    const reviews = props.raceReviews;
    return(
        <div className='section'>
            {reviews && reviews.map(review=>{
                return(
                    <Link to={'/racereport/'+ review.id} key={review.id}>
                        <RaceSummary review={{...review, created:new Date(review.created.seconds*1000)}} />
                    </Link>
                );
            })}
        </div>
    );
};

export default RaceList;