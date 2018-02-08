import React, { Component } from 'react'
import './Home.css'
import EventInput from '../../components/event-input/event-input' 
import Scrape from '../../../back-end/Scrape'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Scrape/>
                <EventInput/>
            </div>
        )
    }
}

export default Home 