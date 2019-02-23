import React from 'react';
import RaceSummary from '../races/RaceSummary';

const RaceList = () =>{

    let date = new Date();
    return(
        <div className='section'>
            <RaceSummary date={date.toLocaleDateString()}/>
            <RaceSummary date={date.toLocaleDateString()}/>
            <RaceSummary date={date.toLocaleDateString()}/>
            <RaceSummary date={date.toLocaleDateString()}/>
        </div>
    );
};

export default RaceList;