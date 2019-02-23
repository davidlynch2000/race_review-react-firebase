import React, { Component } from 'react';
import RaceList from './RaceList';
import Notifications from './Notifications';

class LandingPage extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m8'>
                        <RaceList/>
                    </div>
                    <div className='col s12 m2 offset-m2'>
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }

}

export default LandingPage;