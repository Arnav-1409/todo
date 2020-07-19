import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route name='index' path="/home"> <Protected cmp = {Home}/> </Route>
            <Route name='index' path={"/"} component={Auth} />
            <Redirect to='/'/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
