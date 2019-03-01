import React,{Component} from 'react';
import './SignUp.css'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUpAction} from '../../ActionCreators/AuthActionCreators';

class SignUp extends Component{
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state);
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
    }
    render(){
        if(this.props.auth.uid){
            return(<Redirect to='/'/>);
        }
        return(
            <div className='container section'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <h2 className='col m6 s12 offset-m3 teal-text text-lighten-4'>Sign Up</h2>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='firstname' type='text' onChange={this.handleChange}/>
                            <label htmlFor='firstname'> First Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='lastname' type='text' onChange={this.handleChange}/>
                            <label htmlFor='lastname'> Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='username' type='text' onChange={this.handleChange}/>
                            <label htmlFor='username'> User Name (Appears On Race Reports)</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='email' className='validate' type='email' onChange={this.handleChange}/>
                            <label htmlFor='email'> Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='password' className='validate' type='password' onChange={this.handleChange}/>
                            <label htmlFor='password'> Password</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <button className='teal lighten-4' type='submit'>Submit</button>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='red-text center'>{this.props.authErr}</p>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        authErr: state.auth.authErr,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp:(newuser) => dispatch(signUpAction(newuser)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);