import React, { Component } from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/about'> About </Link></li>
          <li><Link to='/users'> Users </Link></li>
          <li><Link to='/strict-access'> Strict Access </Link></li>
        </nav>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/users/:id' render={(routeProps) => <Users {...routeProps} greetingsMessage='Good Morning' /> } />
          <Route path='/strict-access' render={() => <StrictAccess user={ {username: 'joao', password: '1234'} } /> } />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
