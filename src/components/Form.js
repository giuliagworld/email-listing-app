import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameError from './NameError';
import EmailError from './EmailError';

export default class Form extends Component {

  state = {
    name: '',
    email: '',
    subscribe: true,
    admin: false,
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email: email });
  };

  onSubscribeChange = (e) => {
    const subscribe = e.target.checked;
    this.setState({ subscribe: subscribe });
  };

  onAdminChange = (e) => {
    const admin = e.target.checked;
    this.setState({ admin: admin });
  };

  onSubmit = (e) => {
    if (e) e.preventDefault();
    this.props.onAdd(
      this.state.name,
      this.state.email,
      this.state.subscribe,
      this.state.admin
    )
    this.setState({
      name: '',
      email: '',
      subscribe: true,
      admin: false
    })
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} noValidate>
        <input type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange} /><br />
        <NameError
          isNameValid={this.props.isNameValid}
          // isValid={this.props.isValid}
        />
        <input type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange} /><br />
        <EmailError
          isEmailValid={this.props.isEmailValid}
          // isValid={this.props.isValid}
        />
        <label htmlFor='subscribe'>Subscribe</label>
        <input id='subscribe' type='checkbox' checked={this.state.subscribe} onChange={this.onSubscribeChange} /><br />
        <label htmlFor='admin'>Admin</label>
        <input id='admin' type='checkbox' checked={this.state.admin} onChange={this.onAdminChange} /><br />
        <button type='submit'>Register</button>
      </form>
    )
  }
}


