import React, {Component} from 'react';
import './SignIn.css';
import {signInAction} from '../../ActionCreators/AuthActionCreators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Signin extends Component{
    state = {
        email:"",
        password:""
    }
    submitHandler = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    changeHandler = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
    }
    render(){
        if(this.props.auth.uid){ return <Redirect to='/'/>};
        return(
            <div className='container section'>
                <form onSubmit={this.submitHandler}>
                    <div className='row'>
                        <h2 className='col m6 s12 offset-m3 teal-text text-lighten-4'>Log In</h2>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='email' className='validate' type='email' onChange={this.changeHandler}/>
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <input id='password' className='validate' type='password' onChange={this.changeHandler}/>
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col m6 s12 offset-m3'>
                            <button className='teal lighten-4 flat' type="submit">Submit</button>
                        </div>
                    </div>
                    <div className='red-text center'>{this.props.authErr ? this.props.authErr.message: null} </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        authErr:state.auth.authErr,
        auth:state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        signIn:(credentials) =>{
            dispatch(signInAction(credentials));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);