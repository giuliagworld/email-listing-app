import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const User = props => {

  return (
    <form id={props.id} className={css(Sheet.container)}>
      <input type='text' placeholder='Name' value={props.name} onChange={props.onNameChange} /><br />
      <input type='email' placeholder='Email' value={props.email} onChange={props.onEmailChange} /><br />
      <input type='checkbox' checked={props.subscribe} onChange={props.onSubscribeChange} />
      <input type='checkbox' checked={props.admin} onChange={props.onAdminChange} />
      <button type='button' onClick={props.onEdit}>Edit</button>
      <button type='button' onClick={props.onSave}>Save</button>
      <button type='button' onClick={props.onDelete}>Delete</button>
    </form>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subscribe: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onSubscribeChange: PropTypes.func.isRequired,
  onAdminChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default User