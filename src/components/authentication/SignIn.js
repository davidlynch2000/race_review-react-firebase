import React, {Component} from 'react';
import './SignIn.css';

class Signin extends Component{
    state = {
        email:"",
        password:""
    }
    submitHandler = (e) =>{
        e.preventDefault();
    }
    changeHandler = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
    }
    render(){
        return(
            <div className='container section'>
                <form onSubmit={this.submitHandler}>
                    <div className='row'>
                        <h2 className='col m6 s12 offset-m3 teal-text text-lighten-4'>Sign In</h2>
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
                </form>
            </div>
        );
    }
}

export default Signin;