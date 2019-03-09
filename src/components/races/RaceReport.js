import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './RaceReport.css';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const RaceReport = (props) =>{
    const {review} = props;
    if(!props.auth.uid){return (<Redirect to='/signin'/>)};
    return(
        <div className='container section'>
            <div className='card'>
                <div className='title'>
                    <span className='card-title'>{review.title}</span>
                </div>
                <h5> Swim </h5>
                <p>{review.swimreview}</p>
                <h5> Bike </h5>
                <p>{review.bikereview}</p>
                <h5> Run </h5>
                <p>{review.runreview}</p>
                <h4> Summary </h4>
                <p>{review.summary}</p>
                <div className='row editButton'><button className='teal lighten-4 input-field col m2 s4 offset-m5'>Edit</button></div>
                <span className='author'>{review.author}</span>
                <span className='date'>{new Date(review.created.seconds*1000).toLocaleDateString()}</span>
                {/* <div><span ><button className='center'>Edit</button></span></div> */}
                
            </div>
        </div>
    );
}

RaceReport.propTypes = {
    review: PropTypes.object,
    auth: PropTypes.object,    
}

const mapStateToProps = (state,ownProps) =>{
    const racereports = state.firestore.data.racereports;
    const report = racereports ? racereports[ownProps.match.params.id]: null;
    return{
        review : report,
        auth: state.firebase.auth,
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'racereports'},
    ]),
)(RaceReport);