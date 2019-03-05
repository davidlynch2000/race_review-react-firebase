import React from 'react';
import {NavLink} from 'react-router-dom';
import {signOutAction} from '../../ActionCreators/AuthActionCreators';
import {connect} from 'react-redux';

const SignedInLinks = (props) =>{
    return(
        <ul className='right'>
            <li><NavLink to='/createracereport'>Create Race Report</NavLink></li>
            <li><a href='/signin' onClick={props.signOut}>Log Out</a></li>
            <li><a href="/settings"><i className="material-icons">settings</i></a></li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut:() => dispatch(signOutAction()),
    };
}

export default connect(null,mapDispatchToProps)(SignedInLinks);