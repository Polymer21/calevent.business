import React, { Component } from 'react'
import './login.css'
import Nav from '../../../components/nav'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className='login-page-container'>
                <Router>
                    <Nav />
                </Router>
                <div className='login-component'>
                    <div className='login-title'>
                        <h1 className='title-main'>
                            CalScheduler
                        </h1>
                        <p className='login-title-words'>
                            Go ahead, login & manage that scheduler.
                        </p>
                    </div>



                    <div className='input-container'>
                        <input className='username-input' placeholder='Username or Email'>

                        </input>
                        <input className='password-input' placeholder='Password'>
                        </input>
                    </div>
                    <div className='initiate-login-container'>
                        <Router>
                            <Link to='/userdashboard' className='initiate-login-link'>
                                <button className='initiate-login-button'>
                                    <p className='initiate-login-words'> Login </p>
                                </button>
                            </Link>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login