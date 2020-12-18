import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import "./Login.css";
import axios from "axios";
const qs = require("querystring");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: " https://809feafcdee6.ngrok.io/login",
      input: {  
        emailAddress: "",
        password: "",      
      },
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        input: {
          ...prevState.input,
          [name]: value,
        },
      };
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.input);
    const params = {
      email: this.state.input.emailAddress,  
      password: this.state.input.password,
    };
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    console.log(params);
  
    axios.post(this.state.link, qs.stringify(params), config).then(
      (response) => {
  
        if(response.data ===1){
          // alert("Welcome to XorFit");
         this.props.history.push('/options');
        }
        else{
          alert("Wrong Username or Password")
        }
        
        
      },
      (error) => {
        alert("Please try again later")
        console.log(error);
      }
    );
   
   
    event.preventDefault();
  };

  render() {
    return (
      <div className="container login-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card login-card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="emailAddress"
                    value={this.state.input.emailAddress}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="register">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);