import React, { Component } from 'react'
import './event-child.css'
import {Link} from 'react-router-dom'
// import props from 'prop-types'
// import EventData from './eventData'


class EventChild extends Component {

    render() {
        return (
            <div className = ''>
                <Link to={`/event/${this.props.id}`}>
                <div onClick={this.props.eventClick} className='event-one-container'>
                    <h1 className='event-one-time'>
                        {this.props.time}
                    </h1>
                </div>
                </Link>
            </div>
        )
    }
}

export default EventChild