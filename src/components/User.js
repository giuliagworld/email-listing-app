import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const User = props => {

  return (
    <form id={props.id} className={css(Sheet.container)}>
      <input type='text' placeholder='Name' value={props.name} onChange={props.onNameChange} />
      <input type='email' placeholder='Email' value={props.email} onChange={props.onEmailChange} />
      <input type='checkbox' checked={props.subscribe} onChange={props.onSubscribeChange} />
      <input type='checkbox' checked={props.admin} onChange={props.onAdminChange} />
      <button type='button' onClick={props.onSave}>Save</button>
      <button type='button' onClick={props.onDelete}>Delete</button>
    </form>
  )
}

export default User