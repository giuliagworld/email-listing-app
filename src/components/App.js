import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Form from './Form';
import User from './User';


const App = createReactClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  nameValidation: function(name) {
    let expression = /^[ a-zA-Z-]+$/;
    if (name.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  },

  emailValidation: function(email) {
    let expression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  },

  onAddUser: function(name, email, subscribe, admin) {
    let url = 'http://localhost:3000/users';
    if (this.nameValidation(name) && this.emailValidation(email)) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subscribe,
          admin
        })
      })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        this.state.users.push({
          id: data.id,
          name: data.name,
          email: data.email,
          subscribe: data.subscribe,
          admin: data.admin,
        })
        this.setState(this.state);
        })
        .catch(error =>
          console.error('Error:', error)
        )
    }
  },

  deleteData: function (e) {
    let url = 'http://localhost:3000/users';
    let item = e.target.parentElement.id;
    fetch(url + '/' + item, {
      method: 'DELETE',
    })
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      let index = this.state.users.map(function (user) {
        return user.id;
      }).indexOf(item);
      this.state.users.splice(index, 1)
      this.setState(this.state);
    })
    .catch(error =>
      console.error('Error:', error)
    )
  },

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      this.setState({users : data});
    })
    .catch(error =>
      console.error('Error:', error)
    )
  },

  // onInputChange: function (e) {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // },

  // shouldComponentUpdate() {
  //   console.log('something has changed');
  //   return true;
  // },
  // componentWillUpdate() {
  //   console.log('change it');
  // },

  render: function() {
    return (
      <div>
        <Form onAdd={this.onAddUser}/>
        <br />
        {this.state.users.map(function (user) {
          return (
            <User
              name={user.name}
              email={user.email}
              subscribe={user.subscribe}
              admin={user.admin}
              key={user.id}
              id={user.id}
              onDelete={this.deleteData}
            />
          );
        }.bind(this))}
        <br />
        {/* <form onSubmit={this.onLogin}>
          <p>Login</p>
          <input type='email' placeholder='Email' name='login' value={this.state.login} onChange={this.onInputChange} /><br />
          <button type='submit'>Submit</button>
        </form> */}
      </div>
    )
  }
})

export default App;
