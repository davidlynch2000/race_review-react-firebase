import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = () => {
    return(
        <nav className='teal lighten-4'>
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo left">Race Report</Link>
            <div className='container right'>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => {
    return{

    };
}

export default connect(mapStateToProps)(Navbar);