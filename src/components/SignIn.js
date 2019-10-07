import React, { Component } from 'react'
const axios = require('axios');


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state;

    axios.post(`/api/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  render() {
    return (
      <div className="container login">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn grey darken-3">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn