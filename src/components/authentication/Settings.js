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
                        <span>{props.firstName}<i className="material-icons editIcon">edit</i></span>
                        <span>{props.lastName}<i className="material-icons editIcon">edit</i></span>
                    </div>
                    <div className='editField'>
                        <label> Username: </label>
                        <span>{props.userName}<i className="material-icons editIcon">edit</i></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        firstName:state.firebase.profile.firstname,
        lastName:state.firebase.profile.firstname,
        userName:state.firebase.profile.username,
    }
}

export default connect(mapStateToProps)(Settings);