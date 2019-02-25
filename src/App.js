import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingpage/LandingPage';
import RaceReport from './components/races/RaceReport';
import Signin from './components/authentication/SignIn';
import Signup from './components/authentication/SignUp';
import CreateRaceReport from './components/races/CreateRaceReport';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/racereport/:id' component={RaceReport} />
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/createracereport' component={CreateRaceReport}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
