import React, { Component } from 'react';
import RaceList from './RaceList';
import Notifications from './Notifications';
import {connect} from 'react-redux';

class LandingPage extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m8'>
                        <RaceList raceReviews={this.props.raceReviews}/>
                    </div>
                    <div className='col s12 m2 offset-m2'>
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        raceReviews: state.raceReviews,
    };

};
export default connect(mapStateToProps)(LandingPage);