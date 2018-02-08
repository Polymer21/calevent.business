import React, { Component } from 'react'
import './event-input.css' 
import Title from '../events/Title/title'
import EventOne from '../events/Event-One/event-one'
import EventTwo from '../events/Event-Two/event-two'
import EventThree from '../events/Event-Three/event-three'

class EventInput extends Component {
    render() {
        return (
            <div className='calendar-container'> 
                    <Title/>
                    <EventOne/>
                    <EventTwo/>
                    <EventThree/>
            </div>
        )
    }
}

export default EventInput 