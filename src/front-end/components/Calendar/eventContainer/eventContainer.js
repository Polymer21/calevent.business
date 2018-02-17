import React, { Component } from 'react' 
import './event-container.css' 
import EventChild from '../eventContainer/eventChild/eventChild'
import Title from './eventChild/titleChild'


class EventContainer extends Component {
    render() {
        return (
            <div className='event-container'>
                <div className='event-container-grid'>
                    <Title/>
                    <EventChild eventClick={this.props.eventClick} quote="what's up?" time='10:30' quote2='hey' componentClass='event-one-container' />
                </div>
            </div>
        )
    }
}

export default EventContainer