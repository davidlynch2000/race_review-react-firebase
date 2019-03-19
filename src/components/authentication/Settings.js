import React from 'react';
import {connect} from 'react-redux';

const Settings = (props) => {
    
    return(
        <div className='container section'>
            <div className='card'>
                <div className='title'>
                    <span className='card-title'>Settings</span>
                </div>
                <div>
                    <label> Name</label>
                    <span>{'First Name'}</span><i className="material-icons">edit</i>
                    <span>{'Last Name'}</span><i className="material-icons">edit</i>
                </div>
                <div>
                    <label> Username </label>
                    <span>{'Username'}</span><i className="material-icons">edit</i>
                </div>
                {/* {editable ? 
                    (
                    <div className='row buttonRow'>
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
                } */}
            
            </div>
        </div>
    );

}

export default connect()(Settings);