import React,{Component} from 'react';

class SignUp extends Component{
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    handleSubmit = (e) =>{
        e.preventDefault();
    }
    handleChange = (e) =>{
        e.preventDefault();
    }
    render(){
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
                </form>
            </div>
        )
    }
}

export default SignUp;