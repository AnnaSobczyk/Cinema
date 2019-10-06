import React, { Component } from 'react'

class Register extends Component {
  state = {
    email: '',
    password: '',
    nickname: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
            <label htmlFor="nickname">Nickname</label>
            <input type="text" id='nickname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn grey grey darken-3">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register