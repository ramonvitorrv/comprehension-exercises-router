import React, { Component } from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' Component={Home}> <Home /> </Route>
            <Route path='/about' Component={About}> <About /> </Route>
            <Route path='/Users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' /> }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
