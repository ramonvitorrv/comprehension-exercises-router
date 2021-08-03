import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/users'> Users </Link>
        </div>
        <div>
          <Route exact path='/' Component={Home}> <Home /> </Route>
          <Route path='/about' Component={About}> <About /> </Route>
          <Route path='/Users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' /> }></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
