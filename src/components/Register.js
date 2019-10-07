import React, { Component } from 'react'
const axios = require('axios');

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state;

    axios.post(`/api/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        document.querySelector('.success').style.display = "block";
      })
      .catch(e => {
        console.log(e);
        document.querySelector('.error').style.display = "block";
      })
  }

  render() {
    return (
      <div className="container register">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="surname">Last Name</label>
            <input type="text" id='surname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn grey grey darken-3">Register</button>
          </div>
        </form>
        <p className="success light-green-text">Welcome on board !</p>
        <p className="error red-text">Something went wrong ! !</p>
      </div>
    )
  }
}

export default Register