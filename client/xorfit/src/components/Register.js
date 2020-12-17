import React, { Component } from "react";
import axios from "axios";
import "./Register.css";
const qs = require("querystring");
//https://cors-anywhere.herokuapp.com/
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://0ebe9f971a9e.ngrok.io/signup",
      input: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        phone: "",
        confirmPassword: "",
        weight: "",
        height: "",
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
      name: this.state.input.firstName + this.state.input.lastName,
      password: this.state.input.password,
      phone: this.state.input.phone,
      weight: this.state.input.weight,
      height: this.state.input.height,
    };
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    console.log(params);
    axios.post(this.state.link, qs.stringify(params), config).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    event.preventDefault();
  };
  render() {
    return (
      <div className="container register-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card register-card">
            <div className="card-header">
              <h3>Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.input.firstName}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control col"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.input.lastName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Contact Number"
                    name="phone"
                    value={this.state.input.phone}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.input.confirmPassword}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group row">
                  <input
                    type="number"
                    step="0.1"
                    className="form-control col"
                    placeholder="Weight in KG"
                    required
                    name="weight"
                    value={this.state.input.weight}
                    onChange={this.handleChange}
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="form-control col"
                    placeholder="Height in Ft."
                    required
                    name="height"
                    value={this.state.input.height}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group d-flex justify-content-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-block login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
