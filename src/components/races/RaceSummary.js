import React from 'react';
import './RaceSummary.css';

const RaceSummary = ({review}) =>{
    return(
        <div className='card'>
            <span className='card-title'>{review.title}</span>
            <p>{review.content}</p>
            <p>{review.author}</p>
            <p>{review.date.toLocaleDateString()}</p>
        </div>
    );
}

export default RaceSummary;