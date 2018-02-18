import React, { Component } from 'react'
import './number-of-events.css'

class NumberOfEvents extends Component {
    render(){
        return(
            <div className='number-of-events-container'>
                <div className='events-title'>
                    Events
                </div>
                <div className='number'>
                    11
                </div>
            </div>
        )
    }
}

export default NumberOfEvents