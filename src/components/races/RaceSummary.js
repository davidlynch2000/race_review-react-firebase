import React from 'react';
import './RaceSummary.css';

const RaceSummary = ({review}) =>{
    return(
        <div className='card'>
            <span className='card-title'>{review.title}</span>
            <p>{review.summary}</p>
            <p>{review.author}</p>
            <p>{review.created.toLocaleDateString()}</p>
        </div>
    );
}

export default RaceSummary;