import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

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
      <form onSubmit={this.onSubmit} className={css(Sheet.container)} noValidate>
        <input className={css(Sheet.input)} type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange} /><br />
        <NameError
          isNameValid={this.props.isNameValid}
          // isValid={this.props.isValid}
        />
        <input className={css(Sheet.input)} type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange} /><br />
        <EmailError
          isEmailValid={this.props.isEmailValid}
          // isValid={this.props.isValid}
        />
        <label htmlFor='subscribe'>Subscribe</label>
        <input className={css(Sheet.checkbox)} id='subscribe' type='checkbox' checked={this.state.subscribe} onChange={this.onSubscribeChange} /><br />
        <label htmlFor='admin'>Admin</label>
        <input className={css(Sheet.checkbox)} id='admin' type='checkbox' checked={this.state.admin} onChange={this.onAdminChange} /><br />
        <button className={css(Sheet.button)} type='submit'>Register</button>
      </form>
    )
  }
}


