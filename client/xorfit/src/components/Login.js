import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link :  "https:/rude-dingo-20.loca.lt/signup",
        }
    }
    
    render() {
        return (
            <div className="container login-container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card login-card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-google-plus-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.savaData}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email address" required/>
                                    
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
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
        )
    }
}
