import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

// import AddUser from './AddUser';

const App = createReactClass({
  // propTypes: {
  //   users: PropTypes.array.isRequired,
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired
  // }
  getDefaultProps: function () {
    return {
      users: [],
      name: '',
      email: '',
      checkbox: false
    }
  },
  getInitialState: function () {
    return {
      users: [],
      name: this.props.name,
      email: this.props.email,
      checkbox: this.props.checkbox
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
        checkbox: this.state.checkbox
      })
    })
    this.setState({
      name: '',
      email: '',
      checkbox: false
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
              <input type='text' name='name' value={user.name} onChange={this.handleInputChange}/>
              <input type='email' name='email' value={user.email} onChange={this.handleInputChange}/>
              <input type='checkbox' name='checkbox' checked={user.checkbox} onChange={this.handleInputChange} /><br />
            </li>
          )
        })
        this.setState({users : users});
      })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleInputChange} /><br />
          <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleInputChange} /><br />
          <label htmlFor='checkbox'>Subscribe</label>
          <input id='checkbox' type='checkbox' name='checkbox' defaultChecked={this.state.checkbox} onChange={this.handleInputChange} /><br />
          <button type='submit'>Submit</button>
        </form>
        <br />
        <button type='button' onClick={this.displayUsers}>Display users</button>
        <ul>{this.state.users}</ul>
      </div>
    )
  }
})

export default App;
