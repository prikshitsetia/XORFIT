import React, { Component } from 'react'
import './Home.css';
import Login from './Login';
import logo from '../Logo.png';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid login-block">
                 
                <div className="login">
               <img src={logo} height="150" ></img>
                    <Login/> 
                </div>   
            </div>
        )
    }
}
