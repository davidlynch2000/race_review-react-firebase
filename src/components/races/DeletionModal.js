import React, {Component} from 'react';
import M from 'materialize-css';
import './DeletionModal.css';

class DeletionModal extends Component{

    componentDidMount(){
        const opt = {
            inDuration:250,
            outDuration:250,
            opacity:0.5,
            dismissible:true,
            startingTop:'24%',
            endingTop:'27%',
        };
        M.Modal.init(this.Modal,opt);
    }
    render(){
        return(
            <div>
                <span
                    className='modal-trigger'
                    data-target='deletionModal'
                >
                Delete
                </span>

                <div
                    ref={Modal =>{
                        this.Modal = Modal;
                    }}
                    id='deletionModal'
                    className='modal'
                >
                    <div className='modal-content'>
                        <h5>Are you sure you want to permanently delete this race report?</h5>
                    </div>
                    <div className='center'>
                        <button className='center'>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeletionModal;