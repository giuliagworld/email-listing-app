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
      }).then((results) => {
        return results.json();
      }).then((data) => {
        this.state.users.push({
          id: data.id,
          name: data.name,
          email: data.email,
          subscribe: data.subscribe,
          admin: data.admin,
        })
        this.setState(this.state);
        }).catch ((ex) => {
      })
    }
  },
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let users = data.map((user) => {
          return user;
        })
        this.setState({users : users});
      })
  },





  // getDefaultProps: function () {
  //   return {
  //     users: [],
  //     login: ''
  //   }
  // },
  // getInitialState: function () {
  //   return {
  //     users: this.props.user,
  //     login: this.props.login
  //   }
  // },
  // onInputChange: function (e) {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // },
  // nameValidation: function() {
  //   let expression = /^[ a-zA-Z-]+$/;
  //   if (this.state.name.match(expression)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // },
  // emailValidation: function () {
  //   let expression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  //   if (this.state.email.match(expression)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // },
  // onSubmit: function(e) {
  //   let url = 'http://localhost:3000/users';
  //   e.preventDefault();
  //   if (this.nameValidation() && this.emailValidation()) {
  //     fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: this.state.name,
  //         email: this.state.email,
  //         subscribe: this.state.subscribe,
  //         admin: this.state.admin,
  //       })
  //     }).then((results) => {
  //       return results.json();
  //     }).then((data) => {
  //       console.log(data);
  //     }).catch ((ex) => {
  //       console.log(ex)
  //     }),
  //     this.setState({
  //       name: '',
  //       email: '',
  //       subscribe: true,
  //       admin: false,
  //     })
  //   }
  // },
  // onLogin: function(e) {
  //   let url = 'http://localhost:3000/login/';
  //   e.preventDefault();
  //   if (this.emailValidation()) {
  //     fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         login: this.state.login
  //       })
  //     })
  //     this.setState({
  //       login: ''
  //     })
  //   }
  // },
  // componentDidMount() {
  //   fetch('http://localhost:3000/users')
  //     .then((results) => {
  //       return results.json();
  //     }).then((data) => {
  //       console.log(data);
  //       let users = data.map((user) => {
  //         return (
  //           <div key={user.id}>
  //             <input type='text' name='name' value={user.name} onChange={this.onInputChange} />
  //             <input type='email' name='email' value={user.email} onChange={this.onInputChange} />
  //             <input type='checkbox' name='subscribe' checked={user.subscribe} onChange={this.onInputChange} />
  //             <input type='checkbox' name='admin' checked={user.admin} onChange={this.onInputChange} /><br />
  //           </div>
  //         )
  //       })
  //       this.setState({users : users});
  //     })
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
