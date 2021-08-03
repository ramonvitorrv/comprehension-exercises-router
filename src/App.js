import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' Component={Home}> Home </Route>
        <Route path='/about' Component={About}> About </Route>
      </BrowserRouter>
    );
  }
}

export default App;
