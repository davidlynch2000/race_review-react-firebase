import React from 'react';
import './Notifications.css';

const Notifications = () =>{
    return(
        <div className='section'>
            <div className='notifications'>
                <p>Another</p>
                <p>By Someone</p>
            </div>
            <div className='notifications'>
                <p>And Another</p>
                <p>By Someone</p>
            </div>
            <div className='notifications'>
                <p>And Another</p>
                <p>By Someone</p>
            </div>
        </div>
    );
};

export default Notifications;