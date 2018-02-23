import React, { Component } from 'react'
import './event-child.css'
import {Link} from 'react-router-dom'


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