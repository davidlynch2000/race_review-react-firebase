import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const Notifications = (props) =>{
    const activities = props.activities;
    return(
        <div className='section'>
            <div className='card'>
                <div className='card-content'>
                    <span className='card-title'>Activity</span>
                    <ul> 
                        {activities && activities.map(activity=>{
                            return(
                                <li className='section' key={activity.id}>
                                    <p className='blue-text'>{activity.content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Notifications.propTypes = {
    activities: PropTypes.array,
}

export default Notifications;