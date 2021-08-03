import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, {id} My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
