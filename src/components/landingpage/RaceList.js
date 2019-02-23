import React from 'react';

const RaceList = () =>{

    let date = new Date();
    return(
        <div className='section'>
            <div className='card'>
                <span className='card-title'>Captex 2014</span>
                <p> I'm slow, but also, kiiiiinda awkward</p>
                <p> Tee-Ran-A-Sore-ous Wrecks </p>
                <p className='grey-text'>{date.toLocaleDateString()}</p>
            </div>

            <div className='card'>
                <span className='card-title'> Mean Green</span>
                <p> Ugh... self-seeded swims</p>
                <p> Tee-Ran-A-Sore-ous Wrecks </p>
                <p className='grey-text'>{date.toLocaleDateString()}</p>
            </div>

            <div className='card'>
                <span className='card-title'> Cap 10k</span>
                <p> They're all getting away!</p>
                <p> Tee-Ran-A-Sore-ous Wrecks </p>
                <p className='grey-text'>{date.toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default RaceList;