import React, { Component } from "react";
import "../general.css";
import logo from "../Logo.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="container-fluid nav_wrapper" >
        <img src={logo} height="80"></img>
        {/* <Router>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav ml-auto">
              <Link to="/options">
                <li className="nav-item">Home</li>
              </Link>

              <li className="nav-item">Dashboard</li>
              <li className="nav-item">Logout</li>
            </ul>
          </nav>
        </Router> */}
      </div>
    );
  }
}
