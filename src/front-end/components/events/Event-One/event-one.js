import React, { Component } from 'react' 
import './event-one.css' 

class EventOne extends Component {
    render() {
        return (
            <div className='event-one-container'>
                    <p className='event-one-body1'> 
                        Wide Open.
                    </p>
                    <h1 className='event-one-time'> 
                        10:30am
                    </h1>
                    <p className='event-one-body2'> 
                        Ready for you to take.
                    </p>
                </div>
        )
    }
}

export default EventOne