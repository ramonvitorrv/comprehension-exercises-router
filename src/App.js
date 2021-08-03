import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' Component={Home}> Home </Route>
        <Route path='/about' Component={About}> About </Route>
        <Route path='/users' Component={Users}> Users </Route>
      </BrowserRouter>
    );
  }
}

export default App;
