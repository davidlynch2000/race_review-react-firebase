import React,{Component} from 'react';
import './EditRaceReport.css';
import {connect} from 'react-redux';
import {editRaceReport} from '../../ActionCreators/RaceReportActionCreators';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

class EditRaceReport extends Component{
    state = {
        swimreview:'',
        bikereview:'',
        runreview:'',
        summary:'',
    };

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editRR(this.state);
        this.props.history.push('/');
    };
    render(){
        if(!this.props.auth.uid){
            return <Redirect to='/signin'/>
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div  className='container section'>
                    <div className='row'>
                        <h2 className='teal-text text-lighten-4 col m6 s12 offset-m3'>Edit Race Report</h2>
                    </div>

                    <div className='row'>
                        <div className='input-field col m8 s12 offset-m2'>
                            <input id='title' onChange={this.handleChange} type='text' style={{fontSize:'x-large'}}/>
                            <label htmlFor='title'>Title</label>
                        </div>
                    </div>
                    <div className='input-field'>
                        <textarea id='summary' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='summary' className='textarea-label' >Summary</label>
                    </div>
                    <div className='input-field'>
                        <textarea id='swimreview' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='swimreview' className='textarea-label'>Swim</label>
                    </div>
                    <div className='input-field'>
                        <textarea id='bikereview' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='bikereview' className='textarea-label'>Bike</label>
                    </div>                
                    <div className='input-field'>
                        <textarea id='runreview' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='runreview' className='textarea-label'>Run</label>
                    </div>
                    <div className='row'>
                        <div className='input-field col m2 s4 offset-m5'>
                            <button type='submit' className='teal lighten-4'>Finished Editing</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

EditRaceReport.propTypes = {
    auth: PropTypes.object,
    editRR: PropTypes.func,
    history: PropTypes.object,
}

const mapStateToProps =(state) =>{
    return({
        auth:state.firebase.auth,
    });
}

const mapDispatchToProps = (dispatch) =>{
    return({
        editRR:(raceReport) => dispatch(editRaceReport(raceReport)),
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRaceReport);