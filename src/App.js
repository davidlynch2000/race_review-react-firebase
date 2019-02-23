import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingpage/LandingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch >
            <Route path='/' component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
