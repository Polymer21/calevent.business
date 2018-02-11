import React, { Component } from 'react' 
import './event-two.css' 

class EventTwo extends Component {
    render() {
        return (
            <div className='event-two-container'>
                <p className='event-two-body1'> 
                    You know you want to. 
                </p>
                <h1 className='event-two-time'> 
                    1:30pm
                </h1>
                <p className='event-two-body2'> 
                    C'mon baby.
                </p>
            </div>
        )
    }
}

export default EventTwo