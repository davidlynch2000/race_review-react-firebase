import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './RaceReport.css';

const RaceReport = (props) =>{
    console.log(props.match.params.id);
    console.log(props.review);
    const {review} = props;
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
                <span className='author'>{review.author}</span>
                <span className='date'>{new Date(review.created.seconds*1000).toLocaleDateString()}</span>
            </div>
        </div>
    );
}
const mapStateToProps = (state,ownProps) =>{
    const racereports = state.firestore.date.racereports;
    const report = racereports ? racereports[ownProps.match.params.id]: null;
    return{
        review : report,
    };
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'racereports'},
    ]),
)(RaceReport);