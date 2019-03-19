import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './RaceReport.css';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import DeletionModal from './DeletionModal';

const RaceReport = (props) =>{
    const {review} = props;
    if(!props.auth.uid){return (<Redirect to='/signin'/>)};
    const editable = review.authorid === props.auth.uid;
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
                {editable ? 
                    (
                    <div className='row editButton'>
                        <Link to={'/editracereport/'+props.match.params.id}>
                            <button 
                                className='teal lighten-4 input-field col l2 m2 s4 offset-l3 offset-m3'>
                                    Edit
                            </button>
                        </Link>
                        <button
                            className='teal lighten-4 input-field col l2 m2 s4 offset-l2 offset-m2'>
                                <DeletionModal id={props.match.params.id} history={props.history} />
                        </button>
                    </div>
                    )
                    :
                    ('')
                }
               
                <span className='author'>{review.author}</span>
                <span className='date'>{new Date(review.created.seconds*1000).toLocaleDateString()}</span>                
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