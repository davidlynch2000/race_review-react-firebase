import React, {Component} from 'react';
import './Settings.css';
import {connect} from 'react-redux';

class Settings extends Component{
    state = {
        firstName:'',
        firstNameEditVisible:false,
        lastName:'',
        lastNameEditVisible:false,
        userName:'',
        userNameEditVisible:false,
        editVisible: false,
    }

    handleClick = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id + 'EditVisible']:!this.state[e.target.id + 'EditVisible'],
        });
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
    }

    handleBlur = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id + 'EditVisible']:!this.state[e.target.id + 'EditVisible'],
        })
    }
    
    render(){
        return(
            <div className='container section'>
                <div className='card'>
                    <div className='title'>
                        <span className='card-title'>Settings</span>
                    </div>
                    <div className='allUserInfo'>
                        <div className='editField'>
                            <div>
                                <label> Name: </label>
                                <span 
                                    onClick={this.handleClick} 
                                    onBlur={this.handleBlur}
                                >
                                    {
                                        this.state.firstNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='firstName' 
                                                type='textarea'
                                                defaultValue={this.props.firstName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='firstName'>{this.props.firstName}<i className="material-icons editIcon">edit</i></span>
                                    }
                                </span>
                                <span 
                                    onClick={this.handleClick} 
                                    onBlur={this.handleBlur}
                                >
                                    {
                                        this.state.lastNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='lastName' 
                                                type='textarea'
                                                defaultValue={this.props.lastName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='lastName'>{this.props.lastName}<i className="material-icons editIcon">edit</i></span>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='editField'>
                            <label> Username: </label>
                            <span 
                                    onClick={this.handleClick} 
                                    onBlur={this.handleBlur}
                                >
                                    {
                                        this.state.userNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='userName' 
                                                type='textarea'
                                                defaultValue={this.props.userName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='userName'>{this.props.userName}<i className="material-icons editIcon">edit</i></span>
                                    }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return({
        firstName:state.firebase.profile.firstname,
        lastName:state.firebase.profile.lastname,
        userName:state.firebase.profile.username,
    });
}


export default connect(mapStateToProps)(Settings);