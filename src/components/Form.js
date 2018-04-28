import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const Form = createReactClass({
  propTypes: {
    onAdd: PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      name: '',
      email: '',
      subscribe: true,
      admin: false
    }
  },
  onNameChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  onEmailChange: function(e) {
    this.setState({
      email: e.target.value
    });
  },
  onSubscribeChange: function(e) {
    this.setState({
      subscribe: e.target.checked
    });
  },
  onAdminChange: function(e) {
    this.setState({
      admin: e.target.checked
    });
  },
  onSubmit: function(e) {
    e.preventDefault();
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
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange} /><br />
        <input type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange} /><br />
        <label htmlFor='subscribe'>Subscribe</label>
        <input id='subscribe' type='checkbox' checked={this.state.subscribe} onChange={this.onSubscribeChange} /><br />
        <label htmlFor='admin'>Admin</label>
        <input id='admin' type='checkbox' checked={this.state.admin} onChange={this.onAdminChange} /><br />
        <button type='submit'>Register</button>
      </form>
    )
  }
})

export default Form
