import React from 'react';
import './RaceSummary.css';
import PropTypes from 'prop-types';

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

RaceSummary.propTypes = {
    review: PropTypes.object,
}

export default RaceSummary;