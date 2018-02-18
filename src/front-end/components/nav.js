import React, { Component } from 'react'
import './nav.css'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <div className='nav-container'>
                <Link to='/userdashboard/login' className='login-link'>
                    <button Link to='/userdashboard/login' type='button' onClick='/userdashboard/login' className='user-login'>
                        <p className='user-login-words'>Login</p>
                    </button>
                </Link>
                
                <Link to='/' className='home-link'>
                    <button onClick='/' className='home-button'>
                        <p className='user-home-words'>Home</p>
                    </button>
                </Link>

            </div>
        )
    }
}

export default Nav