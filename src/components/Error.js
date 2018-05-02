import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import Sheet from '../styles/User';

const Component = props => {
  
  if (props.isValid == false) {
    return <div className={css(Sheet.error)}>Error</div>
  }
  else {
    return ''
  }
}

export default Component