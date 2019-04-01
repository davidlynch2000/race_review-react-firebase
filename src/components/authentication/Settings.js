import React, {Component} from 'react';
import './Settings.css';
import {connect} from 'react-redux';

class Settings extends Component{
    state = {
        firstName:'',
        lastName:'',
        userName:'',
        editVisible: false,
    }

    // setInitialComponentState = () =>{
    //     this.setState({
    //         firstName:this.state.firstName,
    //         lastName:this.state.lastName,
    //         userName:this.state.userName,
    //     });
    // }

    // componentDidMount = () =>{
    //     console.log(this.props);
    //     // this.setInitialComponentState();
    //     // console.log(this.state);
    // }


    handleClick = (e) =>{
        console.log(this.state);
        e.preventDefault();
        this.setState({
            ...this.state,
            editVisible:!this.state.editVisible,
        });
        console.log(this.state.editVisible);
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value,
        });
        console.log(this.state);
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
                                <span onClick={this.handleClick} className='firstName'>
                                    {
                                        this.state.editVisible ?
                                            <input 
                                                id='firstName' 
                                                type='textarea'
                                                defaultValue={this.props.firstName} 
                                                onChange={this.handleChange}
                                            />
                                            :
                                            <span>{this.props.firstName}<i className="material-icons editIcon">edit</i></span>
                                    }
                                </span>
                                <span> {this.props.lastName}<i className="material-icons editIcon">edit</i></span>
                            </div>
                        </div>
                        <div className='editField'>
                            <label> Username: </label>
                            <span>{this.props.userName}<i className="material-icons editIcon">edit</i></span>
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