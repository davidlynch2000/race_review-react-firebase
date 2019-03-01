import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {uid} = props.auth;
    const {profile} = props;
    const navLinks = uid ? <SignedInLinks profile={profile}/> :<SignedOutLinks/>;
    return(
        <nav className='teal lighten-4'>
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo left">Race Report</Link>
            <div className='container right'>
                {navLinks}
            </div>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile,
    };
}

export default connect(mapStateToProps)(Navbar);