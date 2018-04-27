import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const AddUser = createReactClass({
  propTypes: {
    onAdd: PropTypes.func.isRequired
  },
  // getDefaultProps: function () {
  //   return {
  //     users: [],
  //     name: '',
  //     email: '',
  //     subscribe: false
  //   }
  // },
  getInitialState: function () {
    return {
      users: [],
      name: '',
      email: '',
      subscribe: false
    }
  },
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  },
  onSubmit: function (e) {
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
    this.setState({
      name: '',
      email: '',
      subscribe: false
    })
  },
  displayUsers: function () {
    fetch('http://localhost:3000/users')
      .then(results => {
        return results.json();
      }).then(data => {
        let users = data.map((user) => {
          return (
            <li key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.subscribe ? 'true' : 'false'}</div>
            </li>
          )
        })
        this.setState({ users: users });
      })
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleInputChange} /><br />
          <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleInputChange} /><br />
          <label htmlFor='subscribe'>Subscribe</label>
          <input id='subscribe' type='checkbox' name='checkbox' defaultChecked={this.state.subscribe} onChange={this.handleInputChange} /><br />
          <button type='submit'>Submit</button>
        </form>
        <br />
        <button type='button' onClick={this.displayUsers}>Display users</button>
        <ul>{this.state.users}</ul>
      </div>
    )
  }
})

export default AddUser;
