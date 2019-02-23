import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingpage/LandingPage';
import RaceReport from './components/races/RaceReport';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/racereport/:id' component={RaceReport} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
