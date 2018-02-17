import React, { Component } from 'react'
import './Home.css' 
import Calendar from '../../components/Calendar/Calendar'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Calendar/>
            </div>
        )
    }
}

export default Home 