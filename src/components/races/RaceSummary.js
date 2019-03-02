import React from 'react';
import './RaceSummary.css';


const RaceSummary = ({review}) =>{
    return(
        <div className='card teal-text text-lighten-3' >
            <span className='card-title '>{review.title}</span>
            <p>{review.summary}</p>
            <p>{review.author}</p>
            <p>{review.created.toLocaleDateString()}</p>
        </div>
    );
}

export default RaceSummary;