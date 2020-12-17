import React, { Component } from 'react'
import './Home.css';
import Login from './Login';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid login-block">
                <div className="login">
                    <Login/> 
                </div>   
            </div>
        )
    }
}
