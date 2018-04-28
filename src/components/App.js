import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

// import AddUser from './AddUser';

const App = createReactClass({
  propTypes: {
    user: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      subscribe: PropTypes.bool,
      admin: PropTypes.bool
    }))
  },
  getDefaultProps: function () {
    return {
      users: [],
      login: ''
    }
  },
  getInitialState: function () {
    return {
      users: this.props.user,
      login: this.props.login
    }
  },
  onInputChange: function (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  },
  nameValidation: function() {
    let expression = /^[ a-zA-Z-]+$/;
    if (this.state.name.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  },
  emailValidation: function () {
    let expression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (this.state.email.match(expression)) {
      return true;
    }
    else {
      return false;
    }
  },
  onSubmit: function(e) {
    let url = 'http://localhost:3000/users';
    e.preventDefault();
    if (this.nameValidation() && this.emailValidation()) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subscribe: this.state.subscribe,
          admin: this.state.admin,
        })
      }).then((results) => {
        return results.json();
      }).then((data) => {
        console.log(data);
      }).catch ((ex) => {
        console.log(ex)
      }),
      this.setState({
        name: '',
        email: '',
        subscribe: true,
        admin: false,
      })
    }
  },
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
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then((results) => {
        return results.json();
      }).then((data) => {
        console.log(data);
        let users = data.map((user) => {
          return (
            <div key={user.id}>
              <input type='text' name='name' value={user.name} onChange={this.onInputChange} />
              <input type='email' name='email' value={user.email} onChange={this.onInputChange} />
              <input type='checkbox' name='subscribe' checked={user.subscribe} onChange={this.onInputChange} />
              <input type='checkbox' name='admin' checked={user.admin} onChange={this.onInputChange} /><br />
            </div>
          )
        })
        this.setState({users : users});
      })
  },
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
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.onInputChange} /><br />
          <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.onInputChange} /><br />
          <label htmlFor='subscribe'>Subscribe</label>
          <input id='subscribe' type='checkbox' name='subscribe' value={this.state.subscribe} checked={this.state.subscribe} onChange={this.onInputChange} /><br />
          <label htmlFor='admin'>Admin</label>
          <input id='admin' type='checkbox' name='admin' value={this.state.admin} checked={this.state.admin} onChange={this.onInputChange} /><br />
          <button type='submit'>Register</button>
        </form>
        <br />
        {/* <button type='button' onClick={this.displayUsers}>Display users</button> */}
        <div>{this.state.users}</div>
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
