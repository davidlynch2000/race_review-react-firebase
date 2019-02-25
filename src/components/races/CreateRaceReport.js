import React,{Component} from 'react';

class CreateRaceReport extends Component{

    state = {
        swim_review:'',
        bike_review:'',
        run_review:'',
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
    };
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className='container section'>
                    <div className='row'>
                        <h2 className='teal-text text-lighten-4 col m6 s12 offset-m3'>New Race Report</h2>
                    </div>

                    <div className='row'>
                        <div className='input-field col m8 s12 offset-m2'>
                            <input id='title' onChange={this.handleChange} type='text' style={{fontSize:'x-large'}}/>
                            <label htmlFor='title'>Title</label>
                        </div>
                    </div>
                    <div className='input-field'>
                        <textarea id='summary' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='summary'>Summary</label>
                    </div>
                    <div className='input-field'>
                        <textarea id='swim_review' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='swim_review'>Swim</label>
                    </div>
                    <div className='input-field'>
                        <textarea id='bike_review' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='bike_review'>Bike</label>
                    </div>                
                    <div className='input-field'>
                        <textarea id='run_review' onChange={this.handleChange} className='materialize-textarea'></textarea>
                        <label htmlFor='run_review'>Run</label>
                    </div>
                    <div className='row'>
                        <div className='input-field col m2 s4 offset-m5'>
                            <button type='submit' className='teal lighten-4'>Save New Race Report</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default CreateRaceReport;