import React, { Component } from 'react'
import './event-input.css' 
import Title from '../events/Title/title'
import EventOne from '../events/Event-One/event-one'
import EventTwo from '../events/Event-Two/event-two'
import EventThree from '../events/Event-Three/event-three'
import EventFour from '../events/Event-Four/Event-four'


class EventInput extends Component {
    render() {
        return (
            <div className='window'>
                <div className='window-grid'> 
                    <Title/>
                    <EventOne/>
                    <EventTwo/>
                    <EventThree/>
                    <EventFour/>
                </div>
            </div>
        )
    }
}

export default EventInput 