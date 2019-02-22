import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

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

export default Navbar;