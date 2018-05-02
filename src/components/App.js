import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import User from './User';

export default class App extends Component {

  state = {
    users: []
  };

  nameValidation = (name) => {
    let expression = /^[ a-zA-Z-]+$/;
    if (name.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  };

  emailValidation = (email) => {
    let expression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  };

  onAddUser = (name, email, subscribe, admin) => {
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
    else {
      console.log('validation failed')
    }
  };

  deleteData = (e) => {
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
  };

  editData = () => {
    console.log('bla');
  };

  updateName = (e) => {
    let item = e.target.parentElement.id;
    const users = this.state.users;
    users[item - 1].name = e.target.value;
    this.setState({ users });
  };

  updateEmail = (e) => {
    let item = e.target.parentElement.id;
    const users = this.state.users;
    users[item - 1].email = e.target.value;
    this.setState({ users });
  };

  updateSubscribe = (e) => {
    let item = e.target.parentElement.id;
    const users = this.state.users;
    users[item - 1].subscribe = e.target.checked;
    this.setState({ users });
  };

  updateAdmin = (e) => {
    let item = e.target.parentElement.id;
    const users = this.state.users;
    users[item - 1].admin = e.target.checked;
    this.setState({ users });
  };

  saveData = (e) => {
    let url = 'http://localhost:3000/users';
    let item = e.target.parentElement.id;

    fetch(url + '/' + item, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": this.state.users[item - 1].name,
        "email": this.state.users[item - 1].email,
        "subscribe": this.state.users[item - 1].subscribe,
        "admin": this.state.users[item - 1].admin
      })
    })
    .then(results =>
      results.json()
    )
    .catch(error =>
      console.error('Error:', error)
    )
  };

  componentDidMount = () => {
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
  };

  render() {
    return (
      <div>
        <Form onAdd={this.onAddUser}/>
        <br />
        {this.state.users.map(function(user) {
          return (
            <User
              name={user.name}
              email={user.email}
              subscribe={user.subscribe}
              admin={user.admin}
              key={user.id}
              id={user.id}
              onDelete={this.deleteData}
              onEdit={this.editData}
              onSave={this.saveData}
              onNameChange={this.updateName}
              onEmailChange={this.updateEmail}
              onSubscribeChange={this.updateSubscribe}
              onAdminChange={this.updateAdmin}
            />
          );
        }.bind(this))}
      </div>
    )
  }
}

