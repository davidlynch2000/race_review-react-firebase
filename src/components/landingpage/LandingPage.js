import React, { Component } from 'react';
import RaceList from './RaceList';
import Notifications from './Notifications';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class LandingPage extends Component{
    render(){

        if(!this.props.auth.uid){
            return <Redirect to='/signin'/>;
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m8'>
                        <RaceList raceReviews={this.props.raceReviews}/>
                    </div>
                    <div className='col s12 m3 offset-m1'>
                        <Notifications activities={this.props.activities}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        raceReviews: state.firestore.ordered.racereports,
        auth: state.firebase.auth,
        activities: state.firestore.ordered.activities,
    };
};

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection:'racereports', orderBy:['created','desc']},
        {collection:'activities', limit:3, orderBy:['time','desc']},
    ])
)(LandingPage);