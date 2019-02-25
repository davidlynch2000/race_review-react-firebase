import React from 'react';

const RaceSummary = (props) =>{
    return(
        <div className='card'>
            <span className='card-title'>CapTex 2014</span>
            <p>Keith got run over by a motorcycle</p>
            <p>D-Ran-Is-Sore(ish) Wrecks</p>
            <p>{props.date}</p>
        </div>
    );
}

export default RaceSummary;