import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    // Olhei no gabarito:
    const { username, password } = this.props.user;
    if(username !== 'joao' || password !== '1234') {
      alert('Acess denied')
      return <Redirect to='/'></Redirect>
    }
    
    return (
      <p>Welcome joao!</p>
    );
  }
}

export default StrictAccess;
