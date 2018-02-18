import React, { Component } from 'react'
import './Home.css' 
import Calendar from '../../components/Calendar/Calendar'
import Nav from '../../components/nav'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Nav/>
                <Calendar/>
            </div>
        )
    }
}

export default Home 