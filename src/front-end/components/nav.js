import React, { Component } from 'react'
import './nav.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <div className='nav-container'>
                <Link to='/userdashboard/login' className='login-link'>
                    <button className='user-login'>
                        <p className='user-login-words'>Login</p>
                    </button>
                </Link>
                
                <Link to='/' className='home-link'>
                    <button className='home-button'>
                        <p className='user-home-words'>Home</p>
                    </button>
                </Link>
                
                <Link to='/userdashboard' className='user-link'>
                    <button className='user-button'>
                        <p className='user-home-words'>User</p>
                    </button>
                </Link>

            </div>
        )
    }
}

export default Nav