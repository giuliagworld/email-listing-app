import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const User = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subscribe: PropTypes.bool.isRequired,
    admin: PropTypes.bool.isRequired,
    // onNameChange: PropTypes.func.isRequired,
    // onEmailChange: PropTypes.func.isRequired,
    // onSubscribeChange: PropTypes.func.isRequired,
    // onAdminChange: PropTypes.func.isRequired,
    // onEdit: PropTypes.func.isRequired,
    // onSave: PropTypes.func.isRequired,
    // onDelete: PropTypes.func.isRequired
  },
  // onNameChange: function(e) {
  //   this.setState({
  //     name: e.target.value
  //   });
  // },
  // onEmailChange: function(e) {
  //   this.setState({
  //     email: e.target.value
  //   });
  // },
  // onSubscribeChange: function(e) {
  //   this.setState({
  //     subscribe: e.target.checked
  //   });
  // },
  // onAdminChange: function(e) {
  //   this.setState({
  //     admin: e.target.checked
  //   });
  // },
  // onSubmit: function (e) {
  //   e.preventDefault();
  //   this.props.onAdd(
  //     this.state.name,
  //     this.state.email,
  //     this.state.subscribe,
  //     this.state.admin
  //   )
  //   this.setState({
  //     name: '',
  //     email: '',
  //     subscribe: true,
  //     admin: false
  //   })
  // },
  render: function() {
    return (
      <div id={this.props.id} className={css(Sheet.container)}>
        <input type='text' name='name' value={this.props.name} onChange={this.props.onNameChange} />
        <input type='email' name='email' value={this.props.email} onChange={this.props.onEmailChange} />
        <input type='checkbox' checked={this.props.subscribe} onChange={this.props.onSubscribeChange} />
        <input type='checkbox' checked={this.props.admin} onChange={this.props.onAdminChange} />
        <button type='button' onClick={this.props.onEdit}>Edit</button>
        <button type='button' onClick={this.props.onSave}>Save</button>
        <button type='button' onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
})

export default User