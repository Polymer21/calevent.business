import React, { Component } from 'react'
import './calendarSlideOut.css'
import Who from './buttons/who'
import When from './buttons/when'
import Where from './buttons/where'
import Create from './buttons/create'


class CalendarSlideOut extends Component {

    render() {
        return (
            <div id='slideout' className={this.props.isVisible ? 'calendar-slide-out-container' : 'hidden-state'}>
                <input type='text' placeholder='What comes to mind when you think ..Title?' className='calendar-slide-out-title' />
                <When />
                <Where />
                <Who id={this.props.id} />
                <button className='calendar-slide-out-special-message-button'>
                    <p className='special-message-button-words'>
                        Special Message
                    </p>
                </button>
                <Create />
                <button className={this.props.isVisible ? 'calendar-slide-out-cancel-button' : 'hidden-state'}>
                    <p className='cancel-button-words'>
                        Cancel
                    </p>
                </button>
            </div>
        )
    }
}

export default CalendarSlideOut 