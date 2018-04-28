import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function User(props) {
  return (
    <form onSubmit={this.onSubmit}>
      <input type='text' placeholder='Name' value={props.name} onChange={this.onInputChange} /><br />
      <input type='email' placeholder='Email' value={props.email} onChange={this.onInputChange} /><br />
      <label htmlFor='subscribe'>Subscribe</label>
      <input id='subscribe' type='checkbox' value={props.subscribe} checked={this.state.subscribe} onChange={this.onInputChange} /><br />
      <label htmlFor='admin'>Admin</label>
      <input id='admin' type='checkbox' value={props.admin} checked={this.state.admin} onChange={this.onInputChange} /><br />
      <button type='submit'>Register</button>
    </form>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subscribe: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired
}

export default User;
