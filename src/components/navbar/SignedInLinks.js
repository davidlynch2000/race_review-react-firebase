import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () =>{
    return(
        <ul className='right'>
            <li><NavLink to='/createracereport'>Create Race Report</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;