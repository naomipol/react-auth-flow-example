import React from 'react';
import './Login.css';

export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        remember: false
      };
    }
  
    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.email, this.state.password, this.state.remember)
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
  
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
  
          <button type="submit">Login</button>
          <label>
            <input
              name="remember"
              type="checkbox"
              checked={this.state.remember}
              onChange={this.handleInputChange}
            />
            Remember me
          </label>
        </form>
      );
    }
  }