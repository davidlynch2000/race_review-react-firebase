import React from 'react';
import './Settings.css';
import {connect} from 'react-redux';

const Settings = (props) => {
    
    return(
        <div className='container section'>
            <div className='card'>
                <div className='title'>
                    <span className='card-title'>Settings</span>
                </div>
                <div className='allUserInfo'>
                    <div className='editField'>
                        <label> Name: </label>
                        <span>{'First Name'}<i className="material-icons editIcon">edit</i></span>
                        <span>{'Last Name'}<i className="material-icons editIcon">edit</i></span>
                    </div>
                    <div className='editField'>
                        <label> Username: </label>
                        <span>{'Username'}<i className="material-icons editIcon">edit</i></span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default connect()(Settings);