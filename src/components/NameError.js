import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const NameError = props => {

  if (props.isNameValid == false) {
    return <div className={css(Sheet.error)}>Name Error</div>
  }
  else {
    return ''
  }
}

export default NameError