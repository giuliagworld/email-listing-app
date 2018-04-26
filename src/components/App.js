import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const App = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      name: '',
      email: '',
      subscribe: false
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      email: this.props.email,
      subscribe: this.props.subscribe
    }
  },
  onChangeName: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  onChangeEmail: function(e) {
    this.setState({
      email: e.target.value
    });
  },
  onChangeSubscribe: function(e) {
    if (this.state.subscribe == false) {
      this.setState({
        subscribe: true
      });
    }
    else {
      this.setState({
        subscribe: false
      });
    }
  },
  onSubmit: function (e) {
    // prevent the form from submitting
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subscribe: this.state.subscribe
      })
    })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input type='text' placeholder='Name' value={this.state.name} onChange={this.onChangeName} /><br />
          <input type='email' placeholder='Email' value={this.state.email} onChange={this.onChangeEmail} /><br />
          <label htmlFor='subscribe'>Subscribe</label>
          <input id='subscribe' type='checkbox' defaultChecked={this.state.subscribe} onChange={this.onChangeSubscribe} /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
})

export default App;
