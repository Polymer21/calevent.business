import React, { Component } from 'react'
import './event-child.css'
// import props from 'prop-types'
// import EventData from './eventData'


class EventChild extends Component {

    render() {
        return (
            <div className = ''>
                <div onClick={this.props.eventClick} className={this.props.componentClass}>
                    <p className='event-one-body1'>
                        {this.props.quote}
                    </p>
                    <h1 className='event-one-time'>
                        {this.props.time}
                    </h1>
                    <p className='event-one-body2'>
                        {this.props.quote2}
                    </p>
                </div>
            </div>
        )
    }
}

export default EventChild