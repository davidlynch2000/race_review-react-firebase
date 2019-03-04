import React from 'react';
import './RaceSummary.css';
import PropTypes from 'prop-types';

const RaceSummary = ({review}) =>{
    return(
        <div className='card teal-text text-lighten-3' >
            <span className='card-title '>{review.title}</span>
            <p>{review.summary}</p>
            <div className='left'>
                <span>{review.author}</span>
            </div>
            <div className='right'>
                <span>{review.created.toLocaleDateString()}</span>
            </div>
        </div>
    );
}

RaceSummary.propTypes = {
    review: PropTypes.object,
}

export default RaceSummary;