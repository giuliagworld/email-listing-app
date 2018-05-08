import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const User = props => {

  return (
    <form id={props.id} className={css(Sheet.container)}>
      <button className={css(Sheet.deleteButton)} type='button' onClick={props.onDelete}>Delete</button>
      <button className={css(Sheet.saveButton)} type='button' onClick={props.onSave}>Save</button>
      <input className={css(Sheet.input)} type='text' placeholder='Name' value={props.name} onChange={props.onNameChange} />
      <input className={css(Sheet.input)} type='email' placeholder='Email' value={props.email} onChange={props.onEmailChange} />
      <input className={css(Sheet.checkbox)} type='checkbox' checked={props.subscribe} onChange={props.onSubscribeChange} />
      {props.subscribe == true ? <div className={css(Sheet.subscribedLabel)}>Subscribed</div> : ''}
      <input className={css(Sheet.checkbox)} type='checkbox' checked={props.admin} onChange={props.onAdminChange} />
      {props.admin == true ? <div className={css(Sheet.adminLabel)}>Admin</div> : ''}
    </form>
  )
}

export default User