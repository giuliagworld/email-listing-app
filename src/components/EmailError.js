import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const EmailError = props => {

  if (props.isEmailValid == false) {
    return <div className={css(Sheet.error)}>Email Error</div>
  }
  else {
    return ''
  }
}

export default EmailError