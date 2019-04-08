import React, {Component} from 'react';
import './Settings.css';
import {connect} from 'react-redux';
import {editUserSettings} from '../../ActionCreators/SettingsActionCreators';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

class Settings extends Component{
    state = {
        firstName:'',
        firstNameEditVisible:false,
        lastName:'',
        lastNameEditVisible:false,
        userName:'',
        userNameEditVisible:false,
        loadedFirstTime: false,
    };

    static getDerivedStateFromProps = (props,current_state) => {
        if(!current_state.loadedFirstTime && props.loadedProfile){
            let firstNameChange = props.firstName !== current_state.firstName ? props.firstName : current_state.firstName;
            let lastNameChange = props.lastName !== current_state.lastName ? props.lastName : current_state.lastName;
            let userNameChange = props.userName !== current_state.userName ? props.userName : current_state.userName;
            return {
                ...current_state,
                firstName: firstNameChange,
                lastName: lastNameChange,
                userName: userNameChange,
                loadedFirstTime:true,
            };
        }
        else{
            return{
                ...current_state,
            };
        }
    }

    handleClick = (e) =>{
        e.preventDefault();
        this.toggleFormField(e.target.id);
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
        this.props.settingsEdit(this.state.firstName,this.state.lastName,this.state.userName);
        this.toggleFormField(e.target.id);
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.toggleFormField(e.target.id);
        }
        this.props.settingsEdit(this.state.firstName,this.state.lastName,this.state.userName);
    }

    toggleFormField = (id) =>{
        this.setState({
            ...this.state,
            [id + 'EditVisible']:!this.state[id + 'EditVisible'],
        })
    }

    render(){
        if(!this.props.auth.uid){
            return <Redirect to='/signin'/>
        }
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
                                    onKeyPress={this.handleKeyPress}
                                >
                                    {
                                        this.state.firstNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='firstName' 
                                                type='textarea'
                                                defaultValue={this.state.firstName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='firstName'>{this.state.firstName}<i className="material-icons editIcon">edit</i></span>
                                    }
                                </span>
                                <span 
                                    onClick={this.handleClick} 
                                    onBlur={this.handleBlur}
                                    onKeyPress={this.handleKeyPress}
                                >
                                    {
                                        this.state.lastNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='lastName' 
                                                type='textarea'
                                                defaultValue={this.state.lastName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='lastName'>{this.state.lastName}<i className="material-icons editIcon">edit</i></span>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='editField'>
                            <label> Username: </label>
                            <span 
                                    onClick={this.handleClick} 
                                    onBlur={this.handleBlur}
                                    onKeyPress={this.handleKeyPress}
                                >
                                    {
                                        this.state.userNameEditVisible ?
                                            <input
                                                autoFocus
                                                id='userName' 
                                                type='textarea'
                                                defaultValue={this.state.userName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span id='userName'>{this.state.userName}<i className="material-icons editIcon">edit</i></span>
                                    }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    loadedProfile: PropTypes.bool,
    auth: PropTypes.object,
    settingsEdit: PropTypes.func,
}

const mapStateToProps = (state) =>{
    return({
        firstName:state.firebase.profile.firstname,
        lastName:state.firebase.profile.lastname,
        userName:state.firebase.profile.username,
        loadedProfile:state.firebase.profile.isLoaded,
        auth:state.firebase.auth,
    });
}

const mapDispatchToProps = (dispatch) =>{
    return({
        settingsEdit: (firstname,lastname,username) => dispatch(editUserSettings(firstname,lastname,username)),
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);